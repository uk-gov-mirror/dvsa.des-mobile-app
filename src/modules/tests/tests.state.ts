import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken, Selector, Store } from '@ngxs/store';
import { TestsStateModel, CatBETestResult, CatCTestResult, CatBETestData, CatCTestData, TestResultUnion } from '../../types/tests.model';
import { SetCurrentTest, AddStartedTest } from './tests.actions';

import { JournalState } from '../journal/journal.state';
import { SetUncoupleRecouple } from './test-data/cat-be/test-data.cat-be.actions';
import { SetDownhillStart } from './test-data/cat-c/test-data.cat-c.actions';

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

  @Selector()
  static getCurrentTest(state: TestsStateModel) {
    if (state.startedTests.length > 0) {
      const currentTestId = state.currentTest.slotId;
      const currentTestSlot = state.startedTests.find(test => test.id === currentTestId);
      return currentTestSlot ? currentTestSlot : null;
    }
  }

  @Selector()
  static getTestData(state: TestsStateModel): CatBETestData | CatCTestData {
    const currentTestId = state.currentTest.slotId;
    const currentTestSlot = state.startedTests.find(test => test.id === currentTestId);
    return currentTestSlot.testData;
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
          ...slot,
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
          ...slot,
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

  @Action(SetUncoupleRecouple)
  setUncoupleRecouple(context: StateContext<TestsStateModel>, action: SetUncoupleRecouple) {
    const state = context.getState();
    const currentTestSlotId: string = state.currentTest.slotId;

    const startedTests = state.startedTests.map((startedTest: TestResultUnion) => {
      if (startedTest.id === currentTestSlotId) {
        return {
          ...startedTest,
          testData: {
            ...startedTest.testData,
            uncoupleRecouple: action.uncoupleRecouple,
          },
        };
      }
      return startedTest;
    });

    console.log('Started tests look like:', startedTests);

    context.setState({
      ...state,
      startedTests,
    });
  }

  @Action(SetDownhillStart)
  setDownhillStart(context: StateContext<TestsStateModel>, action: SetDownhillStart) {
    const state = context.getState();
    const currentTestSlotId: string = state.currentTest.slotId;

    const startedTests = state.startedTests.map((startedTest: TestResultUnion) => {
      if (startedTest.id === currentTestSlotId) {
        return {
          ...startedTest,
          testData: {
            ...startedTest.testData,
            downhillStart: action.downhillStart,
          },
        };
      }
      return startedTest;
    });

    console.log('Started tests look like:', startedTests);

    context.setState({
      ...state,
      startedTests,
    });
  }

  @Action(AddStartedTest)
  addStartedTest(context: StateContext<TestsStateModel>) {

  }
}
