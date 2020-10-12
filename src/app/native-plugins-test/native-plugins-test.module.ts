import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NativePluginsTestPageRoutingModule } from './native-plugins-test-routing.module';

import { NativePluginsTestPage } from './native-plugins-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NativePluginsTestPageRoutingModule
  ],
  declarations: [NativePluginsTestPage]
})
export class NativePluginsTestPageModule {}
