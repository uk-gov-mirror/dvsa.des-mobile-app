import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ExaminerWorkSchedule } from '../../types/journal.model';

@Injectable()
export class JournalService {
  constructor() { }

  public fetchJournal(): Observable<ExaminerWorkSchedule> {
    const journal: ExaminerWorkSchedule = {
      testSlots: [
        {id: '12345', appRef: '24306742010', category: 'B+E'},
        {id: '12346', appRef: '24306744010', category: 'C'},
        {id: '12347', appRef: '24306746010', category: 'B+E'},
        {id: '12348', appRef: '24306755010', category: 'B+E'},
        {id: '12349', appRef: '24306761010', category: 'C'},
      ],
      personalCommitments: [
        { id: '23456', name: 'holiday' },
        { id: '23457', name: 'coffee break' },
      ],
    };

    return of(journal)
      .pipe(delay(1000));
  }

}
