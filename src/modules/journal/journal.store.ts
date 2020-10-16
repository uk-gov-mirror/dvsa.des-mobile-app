import { JournalStateModel } from '../../types/journal.model';
import { Store, StoreConfig } from '@datorama/akita';

export function createInitialState(): JournalStateModel {
  return {
    slots: [],
  };
}

@StoreConfig({ name: 'journal' })
export class JournalStore extends Store<JournalStateModel> {
  constructor() {
    super(createInitialState());
  }
}
