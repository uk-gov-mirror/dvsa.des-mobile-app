import { NgModule } from '@angular/core';
import { JournalStore } from './journal.store';
import { JournalQuery } from './journal.query';

@NgModule({
  providers: [
    JournalStore,
  ]
})
export class JournalStoreModule {}
