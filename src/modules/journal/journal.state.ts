import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { JournalService } from 'src/services/journal/journal.service';
import { JournalStateModel } from '../../types/journal.model';
import { LoadJournal, LoadJournalSuccess } from './journal.actions';

import { of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

const JOURNAL_STATE_TOKEN = new StateToken<JournalStateModel>('journal');

@State<JournalStateModel>({
  name: JOURNAL_STATE_TOKEN,
  defaults: {
    isLoading: false,
    slots: [],
  },
})
@Injectable()
export class JournalState {

  constructor(private journalService: JournalService) {}

  @Selector()
  static getSlots(state: JournalStateModel) {
    return state.slots;
  }

  @Action(LoadJournal)
  loadJournal(context: StateContext<JournalStateModel>) {

    const state = context.getState();

    context.setState({
      ...state,
      isLoading: true,
    });

    return this.journalService.fetchJournal()
      .pipe(
        switchMap(data => context.dispatch(new LoadJournalSuccess(data))),
        catchError((err) => {
          console.log(err);
          return of(err);
        }),
      );
  }

  @Action(LoadJournalSuccess)
  loadJournalSuccess(context: StateContext<JournalStateModel>, action: LoadJournalSuccess) {

    console.log('here we are in Load Journal Success');

    console.log('action is ', action);

    context.patchState({
      slots: action.data.testSlots,
      isLoading: false,
    });

  }
}
