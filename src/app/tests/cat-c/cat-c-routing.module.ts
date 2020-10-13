import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatCPage } from './cat-c.page';

const routes: Routes = [
  {
    path: '',
    component: CatCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatCPageRoutingModule {}
