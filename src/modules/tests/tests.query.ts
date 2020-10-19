import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { TestsStateModel } from '../../types/tests.model';
import { TestsStore } from './tests.store';

@Injectable({ providedIn: 'root' })
export class TestsQuery extends Query<TestsStateModel> {

  currentTest$ = this.select(state => (state.startedTests.find(test => test.id === state.currentTest.slotId)));

  constructor(protected store: TestsStore) {
    super(store);
  }

  get currentTestSlotId() {
    return this.getValue().currentTest.slotId;
  }

  get currentTest() {
    return this.getValue().startedTests.find(test => test.id === this.currentTestSlotId);
  }

}
