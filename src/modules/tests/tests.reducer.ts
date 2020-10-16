import { createReducer, on } from '@ngrx/store';
import { TestsStateModel } from '../../types/tests.model';
import { AddStartedTest, SetCurrentTest } from './tests.actions';

export const testsFeatureKey = 'tests';

export const initialState: TestsStateModel = {
    currentTest: {},
    startedTests: []
};

export const testsReducer = createReducer(
  initialState,
  on(SetCurrentTest, (state: TestsStateModel, { testId }) => ({
    ...state,
    currentTest: {
      slotId: testId
    }
  })),
  on(AddStartedTest, (state: TestsStateModel, { startedTest }) => ({
    ...state,
    startedTests: [
      ...state.startedTests,
      startedTest
    ]
  })),
);
