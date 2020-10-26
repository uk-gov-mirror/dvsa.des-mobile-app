import { searchFeatureKey } from '../modules/search/search.reducer';
import { SearchStateModel } from './search.model';

export interface StoreModel {
  [searchFeatureKey]: SearchStateModel;
}