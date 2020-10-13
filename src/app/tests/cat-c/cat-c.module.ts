import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatCPageRoutingModule } from './cat-c-routing.module';

import { CatCPage } from './cat-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatCPageRoutingModule
  ],
  declarations: [CatCPage]
})
export class CatCPageModule {}
