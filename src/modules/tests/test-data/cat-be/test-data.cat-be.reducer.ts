import { createReducer, on } from '@ngrx/store';
import { CatBETestData } from 'src/types/tests.model';
import { SetUncoupleRecouple } from './test-data.cat-be.actions';

export const initialState: CatBETestData = {
  uncoupleRecouple: undefined,
};

export const testDataCatBEReducer = createReducer(
  initialState,
  on(SetUncoupleRecouple, (state: CatBETestData, { uncoupleRecouple }) => ({
    ...state,
    uncoupleRecouple,
  }))
);
