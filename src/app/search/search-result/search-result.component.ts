import { Component, Input, OnInit } from '@angular/core';

import { SearchResultTestSchema, Name } from '@dvsa/mes-search-schema';
import { DateTime } from 'src/shared/helpers/date-time';
import * as moment from 'moment';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input()
  searchResult: SearchResultTestSchema;

  constructor() { }

  ngOnInit(): void {
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
