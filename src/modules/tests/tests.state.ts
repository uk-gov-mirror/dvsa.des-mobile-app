import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { TestsStateModel } from '../../types/tests.model';
import { SetCurrentTest, AddStartedTest } from './tests.actions';

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

  constructor() {}

  @Action(SetCurrentTest)
  setCurrentTest(context: StateContext<TestsStateModel>, action: SetCurrentTest) {
    
    const state = context.getState();

    context.setState({
      ...state,
      currentTest: {
        slotId: action.testId
      }
    });
  }

  @Action(AddStartedTest)
  addStartedTest(context: StateContext<TestsStateModel>) {
    
  }
}
