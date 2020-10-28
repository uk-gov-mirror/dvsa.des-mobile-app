import { Component, OnInit } from '@angular/core';
import { SearchResultTestSchema, Name } from '@dvsa/mes-search-schema';
import { Store } from '@ngrx/store';

import { StoreModel } from '../../types/store.model';
import { PerformDriverNumberSearch, PerformApplicationReferenceSearch } from '../../modules/search/search.actions';
import { selectSearchResults, selectIsSearchLoading } from '../../modules/search/search.selectors';
import { Observable } from 'rxjs';
import { DateTime } from 'src/shared/helpers/date-time';
import * as moment from 'moment';

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

  searchInput = '';
  searchInputFinal = '';
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
    this.hasSearched = false;
    this.searchInput = '';
    this.searchBy = val;
  }

  searchInputChanged(val: string) {
    this.searchInput = val;
  }

  onSearchClick() {
    if (this.searchBy === SearchBy.DriverNumber) {
      this.store.dispatch(PerformDriverNumberSearch({ driverNumber: this.searchInput }));
    }

    if (this.searchBy === SearchBy.ApplicationReference) {
      this.store.dispatch(PerformApplicationReferenceSearch({ applicationReference: parseInt(this.searchInput, 10) }));
    }

    this.searchInputFinal = this.searchInput;
    this.hasSearched = true;
  }

  getDate(date: string): string {
    return new DateTime(date).format('DD/MM/YYYY');
  }

  getTime(time: string): string {
    return moment(time).format('HH:mm');
  }

  getName(candidateName: Name): string {
    const name: Name = candidateName;
    return name.title ? `${name.title} ${name.firstName} ${name.lastName}` : `${name.firstName} ${name.lastName}`;
  }
}
