import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Office.CatBePage } from './office.cat-be.page';

const routes: Routes = [
  {
    path: '',
    component: Office.CatBePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Office.CatBePageRoutingModule {}
