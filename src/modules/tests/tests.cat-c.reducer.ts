import { Action, combineReducers } from '@ngrx/store';
import { CatCTestResult } from 'src/types/tests.model';
import { journalDataReducer } from './journal-data/journal-data.reducer';
import { testDataCatCReducer } from './test-data/cat-c/test-data.cat-c.reducer';

export function testCatCReducer(state: CatCTestResult, action: Action): CatCTestResult {
  return combineReducers({
    journalData: journalDataReducer,
    testData: testDataCatCReducer,
  })(state as Required<CatCTestResult>, action);
}
