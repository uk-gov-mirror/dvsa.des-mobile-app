import { Component, OnInit } from '@angular/core';
import { SearchResultTestSchema } from '@dvsa/mes-search-schema';
import { Store } from '@ngrx/store';

import { StoreModel } from '../../types/store.model';
import { PerformDriverNumberSearch, PerformApplicationReferenceSearch } from '../../modules/search/search.actions';
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

  searchBy = SearchBy.ApplicationReference;
  hasSearched = false;
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
    if (this.searchBy === SearchBy.DriverNumber) {
      this.store.dispatch(PerformDriverNumberSearch({ driverNumber: 'ABC123EFG' }));
    }

    if (this.searchBy === SearchBy.ApplicationReference) {
      this.store.dispatch(PerformApplicationReferenceSearch({ applicationReference: 123457 }));
    }

    this.hasSearched = true;
  }
}
