import { createAction, props } from '@ngrx/store';
import { TestResultUnion } from 'src/types/tests.model';

export const StartedTest = createAction(
  '[Tests] Start Test',
  props<{ slotId: string }>()
);

export const SetCurrentTest = createAction(
  '[Tests] Set Current Test',
  props<{ testId: string }>()
);

export const AddStartedTest = createAction(
  '[Tests] Add Started Test',
  props<{ startedTest: TestResultUnion }>()
);
