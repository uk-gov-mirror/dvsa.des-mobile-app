import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken, Selector, Store } from '@ngxs/store';
import { TestsStateModel, TestResultUnion } from '../../types/tests.model';
import { SetCurrentTest, AddStartedTest } from './tests.actions';

import { JournalState } from "../journal/journal.state";
import { JournalStateModel } from '../../types/journal.model';

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

  @Action(SetCurrentTest)
  setCurrentTest(context: StateContext<TestsStateModel>, action: SetCurrentTest) {

    const state = context.getState();
    const slots = this.store.selectSnapshot(JournalState.getSlots);
    const slot = slots.find(slot => slot.id === action.testId);

    const newSlot: TestResultUnion = {
      id: slot.id,
      appRef: slot.appRef,
      category: slot.category,
      uncoupleRecouple: false,
      downhillStart: false
    }

    context.setState({
      ...state,
      currentTest: {
        slotId: action.testId
      },
      startedTests: [...state.startedTests, newSlot]
    });
  }

  @Selector([JournalState])
  static getCurrentTest(state: TestsStateModel) {
    if (state.startedTests.length > 0) {
      const currentTestId = state.currentTest.slotId;
      const currentTestSlot = state.startedTests.find(test => test.id === currentTestId);
      return currentTestSlot ? currentTestSlot : null;
    }
  }
}
