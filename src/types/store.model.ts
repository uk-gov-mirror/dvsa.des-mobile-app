
import { journalFeatureKey } from '../modules/journal/journal.reducer';
import { JournalStateModel } from './journal.model';
import { testsFeatureKey } from '../modules/tests/tests.reducer';
import { TestsStateModel } from './tests.model';

export interface StoreModel {
  [journalFeatureKey]: JournalStateModel;
  [testsFeatureKey]: TestsStateModel;
}
