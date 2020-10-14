import { createAction, props } from '@ngrx/store';

export const LoadJournal = createAction(
  '[Journal] Load Journal'
);

export const LoadJournalSuccess = createAction(
  '[Journal] Load Journals Success',
  props<{ data: any }>()
);

export const LoadJournalFailure = createAction(
  '[Journal] Load Journal Failure',
  props<{ error: any }>()
);
