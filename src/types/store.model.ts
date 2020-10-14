
import { journalFeatureKey } from '../modules/journal/journal.reducer';
import { JournalStateModel } from './journal.model';

export interface StoreModel {
  [journalFeatureKey]: JournalStateModel;
}
