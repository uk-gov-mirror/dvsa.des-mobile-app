import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestsPage } from './tests.page';

const routes: Routes = [
  {
    path: '',
    component: TestsPage
  },
  {
    path: 'B+E',
    loadChildren: () => import('./cat-be/cat-be.module').then( m => m.CatBePageModule)
  },
  {
    path: 'C',
    loadChildren: () => import('./cat-c/cat-c.module').then( m => m.CatCPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestsPageRoutingModule {}
