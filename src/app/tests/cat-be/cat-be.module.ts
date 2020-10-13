import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatBePageRoutingModule } from './cat-be-routing.module';

import { CatBePage } from './cat-be.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatBePageRoutingModule
  ],
  declarations: [CatBePage]
})
export class CatBePageModule {}
