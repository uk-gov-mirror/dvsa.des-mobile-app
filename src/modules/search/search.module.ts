import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromSearchReducer from './search.reducer';
import { SearchEffects } from './search.effects';


@NgModule({
  imports: [
    StoreModule.forFeature(fromSearchReducer.searchFeatureKey, fromSearchReducer.searchReducer),
    EffectsModule.forFeature([SearchEffects]),
  ],
})
export class SearchStoreModel {}
