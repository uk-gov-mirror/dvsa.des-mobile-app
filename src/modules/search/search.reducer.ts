import { createReducer, on, State } from '@ngrx/store';
import { SearchStateModel } from 'src/types/search.model';
import { PerformDriverNumberSearch, PerformDriverNumberSearchSuccess } from './search.actions';

export const searchFeatureKey = 'search';

export const initialState: SearchStateModel = {
  isLoading: false,
  error: {},
  results: [],
};
export const searchReducer = createReducer(
  initialState,
  on(PerformDriverNumberSearch, (state: SearchStateModel) => ({
    ...state,
    isLoading: true,
  })),
  on(PerformDriverNumberSearchSuccess, (state: SearchStateModel, { results }) => ({
    ...state,
    isLoading: false,
    results,
  }))
);
