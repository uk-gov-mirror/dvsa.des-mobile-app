import { Action } from '@ngrx/store';
import { TestCategory } from 'src/types/journal.model';
import { TestsStateModel } from '../../types/tests.model';
import { AddStartedTest, SetCurrentTest } from './tests.actions';

import { get } from 'lodash';
import { PopulateJournalData } from './journal-data/journal-data.actions';
import { testsReducerFactory } from './tests-reducer-factory';

export const testsFeatureKey = 'tests';

export const initialState: TestsStateModel = {
    currentTest: {},
    startedTests: {},
};

export const testsReducer = (state = initialState, action: Action) => {

  const slotId = getSlotId(state, action);
  const category: TestCategory = getCategory(state, action, slotId);

  console.log('category is', category);

  switch (action.type) {
    case SetCurrentTest.type:
      return {
        ...state,
        currentTest: {
          // @ts-ignore
          slotId: action.testId,
        }
      };
    default:
      return {
        ...state,
        startedTests: {
          ...state.startedTests,
          [slotId]: {
            ...testsReducerFactory(state.startedTests[slotId], action, category),
          }
        }
      };
  }
};

const getSlotId = (state: TestsStateModel, action: Action): string => {
  if (action.type === AddStartedTest.type) {
    // @ts-ignore
    return action.slotId;
  }

  return (state.currentTest && state.currentTest.slotId) ? state.currentTest.slotId : null;
};

const getCategory = (state: TestsStateModel, action: Action, slotId: string | null): TestCategory => {
  if (action.type === AddStartedTest.type) {
    // @ts-ignore
    return action.category;
  }

  if (action.type === PopulateJournalData.type) {
    // @ts-ignore
    return action.journalData.category;
  }

  return get(state.startedTests[slotId], 'journalData.category', null);
};


