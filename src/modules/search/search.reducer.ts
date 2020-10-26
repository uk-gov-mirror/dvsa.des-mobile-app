import { createReducer, on } from '@ngrx/store';
import { SearchStateModel } from 'src/types/search.model';
import { environment } from '../../environments/environment';

export const searchFeatureKey = 'search';

export const initialState: SearchStateModel = {
  isLoading: false,
  error: {},
  results: [],
};
export const searchReducer = createReducer(
  initialState,
);
