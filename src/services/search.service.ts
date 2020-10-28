import { Injectable } from '@angular/core';
import { SearchResultTestSchema, ActivityCode } from '@dvsa/mes-search-schema';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  tests: SearchResultTestSchema[] = [
    {
      activityCode: '2',
      applicationReference: 123456,
      category: 'B',
      costCode: 'EXTC1',
      testDate: '2020-09-24T09:07:00',
      driverNumber: 'ABC123EFG',
      candidateName: {
        firstName: 'Joe',
        lastName: 'Blogs',
        title: 'Mr',
      },
    },
    {
      activityCode: '1',
      applicationReference: 123460,
      category: 'B',
      costCode: 'EXTC1',
      testDate: '2020-10-12T10:17:00',
      driverNumber: 'ABC123EFG',
      candidateName: {
        firstName: 'Joe',
        lastName: 'Blogs',
        title: 'Mr',
      },
    },
    {
      activityCode: '1',
      applicationReference: 123457,
      category: 'C',
      costCode: 'EXTC1',
      testDate: '2019-06-24T09:00:00',
      driverNumber: 'ABC124EFG',
      candidateName: {
        firstName: 'Jane',
        lastName: 'Doe',
        title: 'Mrs',
      },
    },
    {
      activityCode: '1',
      applicationReference: 123458,
      category: 'B+E',
      costCode: 'EXTC1',
      testDate: '2019-06-24T09:00:00',
      driverNumber: 'ABC125EFG',
      candidateName: {
        firstName: 'David',
        lastName: 'Smith',
        title: 'Mr',
      },
    },
  ];

  constructor() { }

  public fetchTestsByDriverNumber(driverNumber: string): Observable<SearchResultTestSchema[]> {
    const tests: SearchResultTestSchema[] = this.tests.filter((test: SearchResultTestSchema) => test.driverNumber === driverNumber);

    if (tests.length > 0) {
      return of(tests).pipe(delay(1000));
    } else {
      return of([]).pipe(delay(1000));
    }
  }

  public fetchTestsByApplicationReference(applicationReference: number): Observable<SearchResultTestSchema[]> {
    const tests: SearchResultTestSchema[] = this.tests.filter(
      (test: SearchResultTestSchema) => test.applicationReference === applicationReference);

    if (tests.length > 0) {
      return of(tests).pipe(delay(1000));
    } else {
      return of([]).pipe(delay(1000));
    }
  }
}
