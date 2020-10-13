import { createAction, props } from '@ngrx/store';

export const LoadJournals = createAction(
  '[Journal] Load Journals'
);

export const LoadJournalsSuccess = createAction(
  '[Journal] Load Journals Success',
  props<{ data: any }>()
);

export const LoadJournalsFailure = createAction(
  '[Journal] Load Journals Failure',
  props<{ error: any }>()
);
