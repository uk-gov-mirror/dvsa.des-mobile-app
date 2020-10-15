import { createAction, props } from '@ngrx/store';
import { Slot } from 'src/types/journal.model';

export const SetCurrentTest = createAction(
  '[Tests] Set Current Test',
  props<{ testId: string }>()
);

export const SetCurrentTestSuccess = createAction(
  '[Tests] Set Current Test Success',
  props<{ slots: Slot[] }>()
);

export const SetCurrentTestFailure = createAction(
  '[Tests] Set Current Test Failure',
  props<{ error: any }>()
);
