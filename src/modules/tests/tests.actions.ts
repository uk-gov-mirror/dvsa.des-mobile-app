import { createAction, props } from '@ngrx/store';
import { TestCategory } from 'src/types/journal.model';

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
  props<{ slotId: string, category: TestCategory }>()
);
