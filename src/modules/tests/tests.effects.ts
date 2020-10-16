import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { concatMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { Slot } from 'src/types/journal.model';
import { StoreModel } from '../../types/store.model';
import { selectSlots } from '../journal/journal.selector';
import { PopulateJournalData } from './journal-data/journal-data.actions';
import { StartedTest, SetCurrentTest, AddStartedTest } from './tests.actions';

@Injectable()
export class TestsEffect {

  constructor(
    private actions$: Actions,
    private store$: Store<StoreModel>,
  ) {}

  startTestEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StartedTest.type),
      concatMap(action => of(action).pipe(
        withLatestFrom(this.store$.pipe(select(selectSlots))),
      )),
      switchMap(([{ slotId }, slots]) => {

        const testSlot: Slot = slots.find(slot => slot.id === slotId);

        return [
          SetCurrentTest({ testId: slotId }),
          AddStartedTest({ slotId: testSlot.id, category: testSlot.category }),
          PopulateJournalData({
            journalData: {
              id: testSlot.id,
              appRef: testSlot.appRef,
              category: testSlot.category,
            },
          })
        ];
      })
    )
  );

}
