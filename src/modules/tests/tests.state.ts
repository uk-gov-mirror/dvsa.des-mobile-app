import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken, Selector, Store } from '@ngxs/store';
import { TestsStateModel, TestResultUnion, CatBETestResult, CatCTestResult } from '../../types/tests.model';
import { SetCurrentTest, AddStartedTest } from './tests.actions';

import { JournalState } from '../journal/journal.state';

const TESTS_STATE_TOKEN = new StateToken<TestsStateModel>('tests');

@State<TestsStateModel>({
  name: TESTS_STATE_TOKEN,
  defaults: {
    currentTest: {},
    startedTests: [],
  },
})

@Injectable()
export class TestsState {

  constructor(private store: Store) {}

  @Selector([JournalState])
  static getCurrentTest(state: TestsStateModel) {
    if (state.startedTests.length > 0) {
      const currentTestId = state.currentTest.slotId;
      const currentTestSlot = state.startedTests.find(test => test.id === currentTestId);
      return currentTestSlot ? currentTestSlot : null;
    }
  }

  @Action(SetCurrentTest)
  setCurrentTest(context: StateContext<TestsStateModel>, action: SetCurrentTest) {

    const state = context.getState();
    const slots = this.store.selectSnapshot(JournalState.getSlots);
    const slot = slots.find(s => s.id === action.testId);

    const category = slot.category;

    switch (category) {
      case 'B+E':
        const catBETestResult: CatBETestResult = {
          ...slot
        };

        context.setState({
          ...state,
          currentTest: {
            slotId: action.testId
          },
          startedTests: [...state.startedTests, catBETestResult]
        });
        break;
      case 'C':
        const catCTestResult: CatCTestResult = {
          ...slot
        };

        context.setState({
          ...state,
          currentTest: {
            slotId: action.testId
          },
          startedTests: [...state.startedTests, catCTestResult]
        });
        break;
      default:
        break;
    }
  }

  @Action(AddStartedTest)
  addStartedTest(context: StateContext<TestsStateModel>) {

  }
}
