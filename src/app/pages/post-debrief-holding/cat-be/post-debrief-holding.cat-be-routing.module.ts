import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostDebriefHoldingCatBEPage } from './post-debrief-holding.cat-be.page';

const routes: Routes = [
  {
    path: '',
    component: PostDebriefHoldingCatBEPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostDebriefHoldingCatBEPageRoutingModule {}
