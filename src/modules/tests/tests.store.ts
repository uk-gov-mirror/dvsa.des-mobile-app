import { CatBETestData, CatCTestData, CatCTestResult, TestsStateModel } from '../../types/tests.model';
import { Store, StoreConfig } from '@datorama/akita';
import { TestsQuery } from './tests.query';

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

  updateCatBETestData(testData: CatBETestData) {
    const startedTests = this.getValue().startedTests.map(test => {
      if (test.id === this.getValue().currentTest.slotId) {
        return {
          ...test,
          testData,
        };
      }
      return test;
    });

    this.update(state => ({
      ...state,
      startedTests,
    }));
  }

  updateCatCTestData(testData: CatCTestData) {
    const startedTests = this.getValue().startedTests.map(test => {
      if (test.id === this.getValue().currentTest.slotId) {
        return {
          ...test,
          testData,
        };
      }
      return test;
    });

    this.update(state => ({
      ...state,
      startedTests,
    }));
  }

}
