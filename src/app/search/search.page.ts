import { Component, OnInit } from '@angular/core';

const searchBy = {
  DRIVER_NUMBER: 'driverNumber',
  APP_REF: 'applicationRef'
};

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchInput = '4001928472';
  searchByType = searchBy.DRIVER_NUMBER;
  searchResults = null;

  constructor() { }

  ngOnInit() {
  }

  onSearchByChange(evt) {
    if (evt.detail.value === searchBy.DRIVER_NUMBER) {
      this.searchByType = searchBy.DRIVER_NUMBER;
    } else if (evt.detail.value === searchBy.APP_REF) {
      this.searchByType = searchBy.APP_REF;
    }
  }

  onSearchClick() {
    console.log(`Searching ${this.searchInput} under ${this.searchByType}`);
    this.searchResults = [];
  }
}
