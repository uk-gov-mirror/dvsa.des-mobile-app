import { SearchResultTestSchema } from '@dvsa/mes-search-schema';

export type TestCategory = 'B+E' | 'C';

export type SearchStateModel = {
  isLoading: boolean,
  error?: any,
  results: SearchResultTestSchema[],
};
