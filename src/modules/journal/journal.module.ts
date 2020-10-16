import { NgModule } from '@angular/core';
import { JournalStore } from './journal.store';

@NgModule({
  providers: [
    JournalStore,
  ]
})
export class JournalStoreModule {}
