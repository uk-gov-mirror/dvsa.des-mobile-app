import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SearchService } from '../../services/search.service';
import { catchError, exhaustMap, switchMap, map, tap } from 'rxjs/operators';
import { SearchResultTestSchema } from '@dvsa/mes-search-schema';
import { EMPTY } from 'rxjs';
import { 
  PerformApplicationReferenceSearch,
  PerformApplicationReferenceSearchSuccess,
  PerformDriverNumberSearch,
  PerformDriverNumberSearchSuccess,
} from '../../modules/search/search.actions';


@Injectable()
export class SearchEffects {

  constructor(
    private actions$: Actions,
    private searchService: SearchService
  ) {}

  performDriverNumberSearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PerformDriverNumberSearch.type),
      switchMap(({ driverNumber }) => this.searchService.fetchTestsByDriverNumber(driverNumber).pipe(
        map((results: SearchResultTestSchema[]) => PerformDriverNumberSearchSuccess({ results })),
        catchError(() => EMPTY)
      )),
    ),
  );

  performApplicationReferenceSearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PerformApplicationReferenceSearch.type),
      switchMap(({ applicationReference }) => this.searchService.fetchTestsByApplicationReference(applicationReference).pipe(
        map((results: SearchResultTestSchema[]) => PerformApplicationReferenceSearchSuccess({ results })),
        catchError(() => EMPTY)
      ))
    ),
  );
}
