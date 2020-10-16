import { createReducer, on } from '@ngrx/store';
import { JournalData } from 'src/types/tests.model';
import { PopulateJournalData } from './journal-data.actions';


export const initialState: JournalData = {
  id: null,
  appRef: null,
  category: null,
};

export const journalDataReducer = createReducer(
  initialState,
  on(PopulateJournalData, (state: JournalData, { journalData }) => ({
    ...state,
    id: journalData.id,
    appRef: journalData.appRef,
    category: journalData.category,
  })),
);
