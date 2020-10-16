import { Action } from '@ngrx/store';
import { TestCategory } from '../../types/journal.model';
import { CatBETestResult, CatCTestResult, TestResultUnion } from '../../types/tests.model';
import { testCatBEReducer } from './tests.cat-be.reducer';
import { testCatCReducer } from './tests.cat-c.reducer';


export const testsReducerFactory = (state: TestResultUnion, action: Action, category: TestCategory) => {
  switch (category) {
    case 'B+E':
      return testCatBEReducer(state as CatBETestResult, action);
    case 'C':
      return testCatCReducer(state as CatCTestResult, action);
  }
};
