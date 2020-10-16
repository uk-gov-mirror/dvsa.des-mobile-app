import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { concatMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { TestResultUnion } from 'src/types/tests.model';
import { StoreModel } from '../../types/store.model';
import { selectSlots } from '../journal/journal.selector';
import { StartedTest, SetCurrentTest, AddStartedTest } from './tests.actions';

@Injectable()
export class TestsEffect {

  constructor(
    private actions$: Actions,
    private store$: Store<StoreModel>,
  ) {}

  startTestEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StartedTest.type),
      concatMap(action => of(action).pipe(
        withLatestFrom(this.store$.pipe(select(selectSlots))),
      )),
      switchMap(([{ slotId }, slots]) => {

        const startedTest: TestResultUnion = slots.find(slot => slot.id === slotId);

        return [SetCurrentTest({ testId: slotId }), AddStartedTest({ startedTest })];
      })
    )
  );

}
