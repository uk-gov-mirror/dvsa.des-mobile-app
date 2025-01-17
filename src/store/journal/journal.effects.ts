import { Injectable } from '@angular/core';
import { Examiner, ExaminerWorkSchedule } from '@dvsa/mes-journal-schema';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  switchMap, map, withLatestFrom, takeUntil, filter, catchError, startWith, concatMap, tap,
} from 'rxjs/operators';
import { of, Observable, interval } from 'rxjs';
// import { groupBy } from 'lodash';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpErrorResponse } from '@angular/common/http';
import { Store, select, Action } from '@ngrx/store';
import { JournalProvider } from '@providers/journal/journal';
import { AppConfigProvider } from '@providers/app-config/app-config';
import { SlotProvider } from '@providers/slot/slot';
import { JournalRefreshModes } from '@providers/analytics/analytics.model';
import { ConnectionStatus, NetworkStateProvider } from '@providers/network-state/network-state';
import { DataStoreProvider } from '@providers/data-store/data-store';
import { AuthenticationProvider } from '@providers/authentication/authentication';
// import { Examiner } from '@dvsa/mes-test-schema/categories/common';
import { DateTimeProvider } from '@providers/date-time/date-time';
import { LogHelper } from '@providers/logs/logs-helper';

import { HttpStatusCodes } from '@shared/models/http-status-codes';
// import { ExaminerSlotItems, ExaminerSlotItemsByDate } from './journal.model';
import { DateTime, Duration } from '@shared/helpers/date-time';
import { StoreModel } from '@shared/models/store.model';
// import { HttpStatusCodes } from '@shared/models/http-status-codes';
// import { SearchProvider } from '@providers/search/search';
import { LogType } from '@shared/models/log.model';
import { ExaminerSlotItems, ExaminerSlotItemsByDate } from './journal.model';
import { SaveLog } from '../logs/logs.actions';
import { getJournalState } from './journal.reducer';
import * as journalActions from './journal.actions';
import {
  getSelectedDate, getLastRefreshed, getSlots,
  canNavigateToPreviousDay, canNavigateToNextDay,
// getCompletedTests,
} from './journal.selector';
// import { AdvancedSearchParams } from '@providers/search/search.models';
// import moment from 'moment';
// import { removeLeadingZeros } from '@shared/helpers/formatters';
// import { getExaminer } from '../tests/journal-data/common/examiner/examiner.reducer';
// import { getStaffNumber } from '../tests/journal-data/common/examiner/examiner.selector';
// import { hasStartedTests } from '../tests/tests.selector';
// import { getTests } from '../tests/tests.reducer';

@Injectable()
export class JournalEffects {
  constructor(
    private actions$: Actions,
    private journalProvider: JournalProvider,
    private slotProvider: SlotProvider,
    private store$: Store<StoreModel>,
    public appConfig: AppConfigProvider,
    public networkStateProvider: NetworkStateProvider,
    public dataStoreprovider: DataStoreProvider,
    public authProvider: AuthenticationProvider,
    public dateTimeProvider: DateTimeProvider,
    // public searchProvider: SearchProvider,
    private logHelper: LogHelper,
  ) {
  }

  callJournalProvider$ = (mode: string): Observable<Action> => {
    this.store$.dispatch(journalActions.JournalRefresh(mode));
    return of(null).pipe(
      withLatestFrom(
        this.store$.pipe(
          select(getJournalState),
          map(getLastRefreshed),
        ),
        this.store$.pipe(
          select(getJournalState),
          map(getSlots),
        ),
        this.store$.pipe(
          select(getJournalState),
          map((journal) => journal.examiner),
        ),
      ),
      switchMap(([, lastRefreshed, slots, examiner]) => {
        return this.journalProvider
          .getJournal(lastRefreshed)
          .pipe(
            tap((journalData: ExaminerWorkSchedule) => this.journalProvider.saveJournalForOffline(journalData)),
            map((journalData: ExaminerWorkSchedule): ExaminerSlotItems => ({
              examiner: journalData.examiner as Required<Examiner>,
              slotItems: this.slotProvider.detectSlotChanges(slots, journalData),
            })),
            map((examinerSlotItems: ExaminerSlotItems): ExaminerSlotItemsByDate => ({
              examiner: examinerSlotItems.examiner,
              slotItemsByDate: this.slotProvider.getRelevantSlotItemsByDate(examinerSlotItems.slotItems),
            })),
            map((slotItemsByDate: ExaminerSlotItemsByDate) => journalActions.LoadJournalSuccess(
              slotItemsByDate,
              this.networkStateProvider.getNetworkState(),
              this.authProvider.isInUnAuthenticatedMode(),
              lastRefreshed,
            )),
            catchError((err: HttpErrorResponse) => {
              // For HTTP 304 NOT_MODIFIED we just use the slots we already have cached
              if (err.status === HttpStatusCodes.NOT_MODIFIED) {
                return of(journalActions.LoadJournalSuccess(
                  { examiner, slotItemsByDate: slots },
                  this.networkStateProvider.getNetworkState(),
                  this.authProvider.isInUnAuthenticatedMode(),
                  lastRefreshed,
                ));
              }

              if (err.message === 'Timeout has occurred') {
                return of(journalActions.JournalRefreshError('Retrieving Journal', err.message));
              }

              this.store$.dispatch(SaveLog({
                payload: this.logHelper.createLog(LogType.ERROR, 'Retrieving Journal', err.message),
              }));

              return ErrorObservable.create(err);
            }),
          );
      }),
    );
  };

  journal$ = createEffect(() => this.actions$.pipe(
    ofType(journalActions.LoadJournalSilent),
    switchMap(
      () => this.callJournalProvider$(JournalRefreshModes.AUTOMATIC).pipe(
        catchError((err: HttpErrorResponse) => {
          return [
            journalActions.JournalRefreshError('AutomaticJournalRefresh', err.message),
            journalActions.LoadJournalSilentFailure(err),
          ];
        }),
      ),
    ),
  ));

  loadJournal$ = createEffect(() => this.actions$.pipe(
    ofType(journalActions.LoadJournal),
    switchMap(
      () => this.callJournalProvider$(JournalRefreshModes.MANUAL).pipe(
        catchError((err: HttpErrorResponse) => {
          return [
            journalActions.JournalRefreshError('ManualJournalRefresh', err.message),
            journalActions.LoadJournalFailure(err),
          ];
        }),
      ),
    ),
  ));

  pollingSetup$ = createEffect(() => this.actions$.pipe(
    ofType(journalActions.SetupPolling.type),
    switchMap(() => {
      // Switch map the manual refreshes so they restart the timer.
      const manualRefreshes$ = this.actions$.pipe(
        ofType(journalActions.LoadJournal),
        // Initial emission so poll doesn't wait until the first manual refresh
        startWith(null),
      );
      const pollTimer$ = manualRefreshes$.pipe(
        switchMap(() => interval(this.appConfig.getAppConfig().journal.autoRefreshInterval)),
      );

      const pollsWhileOnline$ = pollTimer$
        .pipe(
          withLatestFrom(this.networkStateProvider.onNetworkChange()),
          filter(([, connectionStatus]) => connectionStatus === ConnectionStatus.ONLINE),
        );

      return pollsWhileOnline$
        .pipe(
          takeUntil(this.actions$.pipe(ofType(journalActions.StopPolling))),
          switchMap(() => of(journalActions.LoadJournalSilent())),
        );
    }),
  ));

  // TODO Re-introduce at later date
  // @Effect()
  // loadCompletedTests$ = this.actions$.pipe(
  //   ofType(journalActions.LOAD_COMPLETED_TESTS),
  //
  //   withLatestFrom(
  //     this.store$.pipe(
  //       select(getJournalState),
  //       select(getExaminer),
  //       select(getStaffNumber),
  //     ),
  //     this.store$.pipe(
  //       select(getTests),
  //       select(hasStartedTests),
  //     ),
  //     this.store$.pipe(
  //       select(getJournalState),
  //       select(getCompletedTests),
  //     ),
  //   ),
  //
  //   filter(([action, staffNumber, hasStartedTests, completedTests]) =>
  //     !hasStartedTests && completedTests && completedTests.length === 0),
  //
  //   switchMap(([action, staffNumber]) => {
  //     const numberOfDaysToView = this.appConfig.getAppConfig().journal.numberOfDaysToView;
  //     const advancedSearchParams: AdvancedSearchParams = {
  //       startDate: moment().subtract(numberOfDaysToView, 'days').format('YYYY-MM-DD'),
  //       endDate: moment().format('YYYY-MM-DD'),
  //       staffNumber: removeLeadingZeros(staffNumber),
  //       costCode: '',
  //     };
  //
  //     return this.searchProvider.advancedSearch(advancedSearchParams).pipe(
  //       map((searchResults) => {
  //         return new journalActions.LoadCompletedTestsSuccess(searchResults);
  //       }),
  //       catchError((err) => {
  //         return of(new journalActions.LoadCompletedTestsFailure(err));
  //       }),
  //     );
  //
  //   }),
  // );

  selectPreviousDayEffect$ = createEffect(() => this.actions$.pipe(
    ofType(journalActions.SelectPreviousDay),
    concatMap((action) => of(action).pipe(
      withLatestFrom(
        this.store$.pipe(
          select(getJournalState),
          map(getSelectedDate),
        ),
        this.store$.pipe(
          select(getJournalState),
          map((journal) => canNavigateToPreviousDay(journal, this.dateTimeProvider.now())),
        ),
      ),
    )),
    // eslint-disable-next-line @typescript-eslint/no-shadow
    filter(([,, canNavigateToPreviousDay]) => canNavigateToPreviousDay),
    // eslint-disable-next-line @typescript-eslint/no-shadow
    switchMap(([, selectedDate]) => {
      const previousDay = DateTime.at(selectedDate).add(-1, Duration.DAY).format('YYYY-MM-DD');

      return [
        journalActions.SetSelectedDate(previousDay),
        journalActions.JournalNavigateDay(previousDay),
      ];
    }),
  ));

  selectNextDayEffect$ = createEffect(() => this.actions$.pipe(
    ofType(journalActions.SelectNextDay),
    concatMap((action) => of(action).pipe(
      withLatestFrom(
        this.store$.pipe(
          select(getJournalState),
          map(getSelectedDate),
        ),
        this.store$.pipe(
          select(getJournalState),
          map(canNavigateToNextDay),
        ),
      ),
    )),
    // eslint-disable-next-line @typescript-eslint/no-shadow
    filter(([,, canNavigateToNextDay]) => canNavigateToNextDay),
    // eslint-disable-next-line @typescript-eslint/no-shadow
    switchMap(([, selectedDate]) => {
      const nextDay = DateTime.at(selectedDate).add(1, Duration.DAY).format('YYYY-MM-DD');

      return [
        journalActions.SetSelectedDate(nextDay),
        journalActions.JournalNavigateDay(nextDay),
      ];
    }),
  ));

}
