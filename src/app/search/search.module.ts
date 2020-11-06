import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { SearchResultComponent } from './search-result/search-result.component';
import { TabsComponent } from '../common/tabs/tabs.component';
import { TabComponent } from '../common/tab/tab.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule
  ],
  declarations: [SearchPage, SearchResultComponent, TabsComponent, TabComponent]
})
export class SearchPageModule {}
