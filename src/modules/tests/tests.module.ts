import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TestsState } from './tests.state';

@NgModule({
  imports: [
    NgxsModule.forFeature([TestsState])
  ],
})
export class TestsModule {}
