import { Action, createReducer, on, State } from '@ngrx/store';
import { LoadJournals } from './journal.actions';

export const journalFeatureKey = 'journal';

export type TestCategory = 'B+E' | 'C';

export type Slot = {
  id: string;
  appRef: string;
  category: TestCategory;
};

export type PersonalCommitment = {
  id: string,
  name: string,
};

export type ExaminersWorkSchedule = {
  testsSlots?: Slot[];
  personalCommitments?: PersonalCommitment[];
};

export const initialState: ExaminersWorkSchedule = {
  testsSlots: [],
  personalCommitments: [],
};

export const JournalReducer = (state = initialState, action: Action): ExaminersWorkSchedule => {
  switch (action.type) {
    case LoadJournals.type:
      return {
        ...state,
        testsSlots: [
          ...state.testsSlots,
          {id: '12345', appRef: '24306742010', category: 'B+E'},
          {id: '12346', appRef: '24306744010', category: 'C'},
          {id: '12347', appRef: '24306746010', category: 'B+E'},
          {id: '12348', appRef: '24306755010', category: 'B+E'},
          {id: '12349', appRef: '24306761010', category: 'C'},
        ]
      };
    default:
      return state;
  }
};

/*
export const reducer = createReducer(
  initialState,
);
*/
