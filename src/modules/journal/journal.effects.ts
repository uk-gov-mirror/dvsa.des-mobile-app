import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ExaminerWorkSchedule, Slot } from 'src/types/journal.model';
import { JournalService } from '../../services/journal.service';
import { LoadJournal, LoadJournalSuccess } from './journal.actions';

@Injectable()
export class JournalEffects {

  constructor(
    private actions$: Actions,
    private journalService: JournalService,
  ) {}

  loadJournal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadJournal.type),
      switchMap(() => this.journalService.fetchJournal()
        .pipe(
          map((journalData: ExaminerWorkSchedule) => journalData.testSlots),
          map((slots: Slot[]) => LoadJournalSuccess({slots})),
          catchError(() => EMPTY)
        ))
    )
  );

}
