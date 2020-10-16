import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { JournalStateModel } from '../../types/journal.model';
import { JournalStore } from './journal.store';

@Injectable({ providedIn: 'root' })
export class JournalQuery extends Query<JournalStateModel> {

  allSlots$ = this.select('slots');
  isLoading$ = this.selectLoading();

  constructor(protected store: JournalStore) {
    super(store);
  }

  get allJournalSlots() {
    return this.getValue().slots;
  }

}
