import { TestsStateModel } from '../../types/tests.model';
import { Store, StoreConfig } from '@datorama/akita';

export function createInitialState(): TestsStateModel {
  return {
    currentTest: {},
    startedTests: []
  };
}

@StoreConfig({ name: 'tests' })
export class TestsStore extends Store<TestsStateModel> {
  constructor() {
    super(createInitialState());
  }
}
