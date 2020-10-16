
import { createAction, props } from '@ngrx/store';

export const SetUncoupleRecouple = createAction(
  '[Test Data] [Cat B+E] Set Uncouple Recouple',
  props<{ uncoupleRecouple: boolean } >()
);
