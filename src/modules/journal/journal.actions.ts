import { createAction, props } from '@ngrx/store';
import { Slot } from 'src/types/journal.model';

export const LoadJournal = createAction(
  '[Journal] Load Journal'
);

export const LoadJournalSuccess = createAction(
  '[Journal] Load Journals Success',
  props<{ slots: Slot[] }>()
);

export const LoadJournalFailure = createAction(
  '[Journal] Load Journal Failure',
  props<{ error: any }>()
);
