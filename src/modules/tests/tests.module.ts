import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TestsEffect } from './tests.effects';
import * as fromTestsReducer from './tests.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromTestsReducer.testsFeatureKey, fromTestsReducer.testsReducer),
    EffectsModule.forFeature([TestsEffect]),
  ],
})
export class TestsStoreModule {}
