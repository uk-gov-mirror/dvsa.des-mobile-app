
import { createSelector } from '@ngrx/store';
import { TestsStateModel, TestResultUnion } from '../../types/tests.model';
import { StoreModel } from '../../types/store.model';

export const selectTests = (state: StoreModel): TestsStateModel => state.tests;

export const selectCurrentTest = createSelector(
  selectTests,
  (tests: TestsStateModel): TestResultUnion =>
      tests.startedTests[tests.currentTest.slotId],
);
