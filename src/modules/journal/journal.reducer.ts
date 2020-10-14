import { createReducer, on } from '@ngrx/store';
import { JournalStateModel } from '../../types/journal.model';
import { LoadJournal, LoadJournalSuccess } from './journal.actions';

export const journalFeatureKey = 'journal';

export const initialState: JournalStateModel = {
  isLoading: false,
  error: {},
  slots: [],
};

export const journalReducer = createReducer(
  initialState,
  on(LoadJournal, (state: JournalStateModel) => ({
    ...state,
    isLoading: true,
  })),
  on(LoadJournalSuccess, (state: JournalStateModel, { slots }) => ({
    ...state,
    isLoading: false,
    slots,
  })),
);
