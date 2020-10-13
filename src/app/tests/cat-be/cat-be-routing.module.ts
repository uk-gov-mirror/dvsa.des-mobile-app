import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatBePage } from './cat-be.page';

const routes: Routes = [
  {
    path: '',
    component: CatBePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatBePageRoutingModule {}
