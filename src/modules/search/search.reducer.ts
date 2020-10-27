import { createReducer, on, State } from '@ngrx/store';
import { SearchStateModel } from 'src/types/search.model';
import {
  PerformDriverNumberSearch,
  PerformDriverNumberSearchSuccess,
  PerformApplicationReferenceSearch,
  PerformApplicationReferenceSearchSuccess,
} from './search.actions';

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
  })),
  on(PerformApplicationReferenceSearch, (state: SearchStateModel) => ({
    ...state,
    isLoading: true,
  })),
  on(PerformApplicationReferenceSearchSuccess, (state: SearchStateModel, { results }) => ({
    ...state,
    isLoading: false,
    results,
  })),
);
