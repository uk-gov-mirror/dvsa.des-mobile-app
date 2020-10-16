import { createReducer, on } from '@ngrx/store';
import { CatCTestData } from 'src/types/tests.model';
import { SetDownhillStart } from './test-data.cat-c.actions';

export const initialState: CatCTestData = {
  downhillStart: undefined,
};

export const testDataCatCReducer = createReducer(
  initialState,
  on(SetDownhillStart, (state: CatCTestData, { downhillStart }) => ({
    ...state,
    downhillStart,
  }))
);
