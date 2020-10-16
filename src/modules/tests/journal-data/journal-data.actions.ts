import { createAction, props } from '@ngrx/store';
import { JournalData } from 'src/types/tests.model';

export const PopulateJournalData = createAction(
  '[JournalData] Populate Journal Data',
  props<{ journalData: JournalData}>()
);
