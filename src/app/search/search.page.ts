import { Component, OnInit } from '@angular/core';
import { SearchResultTestSchema } from '@dvsa/mes-search-schema';

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
  searchResults: SearchResultTestSchema[] = [];

  constructor() { }

  ngOnInit() {
  }

  onSearchByChange(val: SearchBy) {
    this.searchBy = val;
  }

  onSearchClick() {
    this.searchResults = [];

    if (this.searchBy === SearchBy.DriverNumber) {
      console.log(`Searching ${this.searchInput} under ${this.searchBy}`);
    }

    if (this.searchBy === SearchBy.ApplicationReference) {
      console.log(`Searching ${this.searchInput} under ${this.searchBy}`);
    }
  }
}
