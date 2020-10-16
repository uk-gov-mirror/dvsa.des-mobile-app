import { createAction, props } from '@ngrx/store';

export const SetDownhillStart = createAction(
  '[Test Data] [Cat C] Set Downhill Start',
  props<{ downhillStart: boolean }>()
);
