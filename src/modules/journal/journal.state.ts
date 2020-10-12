import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken, Selector } from '@ngxs/store';
import { JournalStateModel } from '../../types/journal.model';
import { LoadJournal } from './journal.actions';

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

  constructor() {}

  @Action(LoadJournal)
  loadJournal(context: StateContext<JournalStateModel>) {
    console.log(`Handling ${LoadJournal.type} action`);

    context.setState({
      slots: [
        {id: '12345', appRef: '24306742010', category: 'B+E'},
        {id: '12346', appRef: '24306744010', category: 'C'},
        {id: '12347', appRef: '24306746010', category: 'B+E'},
        {id: '12348', appRef: '24306755010', category: 'B+E'},
        {id: '12349', appRef: '24306761010', category: 'C'},
      ],
      isLoading: true,
    });
  }

  @Selector()
  static getSlots(state: JournalStateModel) {
    return state.slots;
  }
}
