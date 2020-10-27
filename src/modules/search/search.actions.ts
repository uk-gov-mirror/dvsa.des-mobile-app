import { SearchResultTestSchema } from '@dvsa/mes-search-schema';
import { createAction, props } from '@ngrx/store';

export const LoadSearches = createAction(
  '[Search] Load Searches'
);

export const LoadSearchesSuccess = createAction(
  '[Search] Load Searches Success',
  props<{ data: any }>()
);

export const LoadSearchesFailure = createAction(
  '[Search] Load Searches Failure',
  props<{ error: any }>()
);

export const PerformDriverNumberSearch = createAction(
  '[Search] Perform Driver Number Search',
  props<{ driverNumber: string }>()
);

export const PerformDriverNumberSearchSuccess = createAction(
  '[Search] Perform Driver Number Search Success',
  props<{ results: SearchResultTestSchema[] }>()
);

export const PerformApplicationReferenceSearch = createAction(
  '[Search] Perform Application Reference Search',
  props<{ applicationReference: string }>()
);