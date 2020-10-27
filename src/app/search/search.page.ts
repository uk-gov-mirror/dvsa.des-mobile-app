import { Component, OnInit } from '@angular/core';
import { SearchResultTestSchema } from '@dvsa/mes-search-schema';
import { Store } from '@ngrx/store';

import { StoreModel } from '../../types/store.model';
import { PerformDriverNumberSearch } from '../../modules/search/search.actions';
import { selectSearchResults, selectIsSearchLoading } from '../../modules/search/search.selectors';
import { Observable } from 'rxjs';

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

  searchResults$: Observable<SearchResultTestSchema[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<StoreModel>) { }

  ngOnInit() {
    this.searchResults$ = this.store.select(selectSearchResults);
    this.isLoading$ = this.store.select(selectIsSearchLoading);
  }

  onSearchByChange(val: SearchBy) {
    this.searchBy = val;
  }

  onSearchClick() {
    this.searchResults = [];

    if (this.searchBy === SearchBy.DriverNumber) {
      console.log(`Searching ${this.searchInput} under ${this.searchBy}`);
      this.store.dispatch(PerformDriverNumberSearch({ driverNumber: 'ABC123EFG' }));
    }

    if (this.searchBy === SearchBy.ApplicationReference) {
      console.log(`Searching ${this.searchInput} under ${this.searchBy}`);
    }
  }
}
