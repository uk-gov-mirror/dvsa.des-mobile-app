import { Action, combineReducers } from '@ngrx/store';
import { CatBETestResult } from 'src/types/tests.model';
import { journalDataReducer } from './journal-data/journal-data.reducer';
import { testDataCatBEReducer } from './test-data/cat-be/test-data.cat-be.reducer';

export function testCatBEReducer(state: CatBETestResult, action: Action): CatBETestResult {
  return combineReducers({
    journalData: journalDataReducer,
    testData: testDataCatBEReducer,
  })(state as Required<CatBETestResult>, action);
}
