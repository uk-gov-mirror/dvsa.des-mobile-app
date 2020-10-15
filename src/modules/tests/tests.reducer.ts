import { createReducer, on } from '@ngrx/store';
import { TestCategory } from '../../types/journal.model';
import { TestsStateModel } from '../../types/tests.model';
import { SetCurrentTest, SetCurrentTestSuccess } from './tests.actions';

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
);
