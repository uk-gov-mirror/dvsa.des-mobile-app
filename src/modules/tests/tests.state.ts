import { Injectable } from '@angular/core';
import { State, StateToken } from '@ngxs/store';
import { TestsStateModel } from '../../types/tests.model';

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

}
