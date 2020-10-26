import { Component, OnInit } from '@angular/core';

enum SearchBy {
  DriverNumber = 'driverNumber',
  ApplicationReference = 'appReference',
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchInput = '4001928472';
  searchBy = SearchBy.ApplicationReference;
  searchResults = null;

  constructor() { }

  ngOnInit() {
  }

  onSearchByChange(val: SearchBy) {
    this.searchBy = val;
  }

  onSearchClick() {
    console.log(`Searching ${this.searchInput} under ${this.searchBy}`);
    this.searchResults = [];
  }
}
