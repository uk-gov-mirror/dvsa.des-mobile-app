import { createSelector } from '@ngrx/store';
import { SearchResultTestSchema } from '@dvsa/mes-search-schema';
import { StoreModel } from '../../types/store.model';
import { SearchStateModel } from '../../types/search.model';

export const selectSearch = (state: StoreModel): SearchStateModel => state.search;

export const selectSearchResults = createSelector(
  selectSearch,
  (search: SearchStateModel): SearchResultTestSchema[] => search.results,
);

export const selectIsSearchLoading = createSelector(
  selectSearch,
  (search: SearchStateModel): boolean => search.isLoading,
);
