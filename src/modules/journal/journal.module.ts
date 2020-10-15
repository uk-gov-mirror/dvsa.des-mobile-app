import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { JournalService } from 'src/services/journal.service';
import { JournalEffects } from './journal.effects';
import * as fromJournalReducer from './journal.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromJournalReducer.journalFeatureKey, fromJournalReducer.journalReducer),
    EffectsModule.forFeature([JournalEffects]),
  ],
  providers: [
    JournalService,
  ]
})
export class JournalStoreModule {}
