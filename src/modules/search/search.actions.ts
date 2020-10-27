import { SearchResultTestSchema } from '@dvsa/mes-search-schema';
import { createAction, props } from '@ngrx/store';

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
  props<{ applicationReference: number }>()
);

export const PerformApplicationReferenceSearchSuccess = createAction(
  '[Search] Perform Application Reference Search Success',
  props<{ results: SearchResultTestSchema[] }>()
);
