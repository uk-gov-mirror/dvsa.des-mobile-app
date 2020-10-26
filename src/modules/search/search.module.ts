import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
// import { SearchEffects } from './search.effects';
import * as fromSearchReducer from './search.reducer';


@NgModule({
  imports: [
    StoreModule.forFeature(fromSearchReducer.searchFeatureKey, fromSearchReducer.searchReducer),
    // EffectsModule.forFeature([JournalEffects]),
  ],
})
export class SearchStoreModel {}
