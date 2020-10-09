import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExaminerWorkSchedule } from '../../types/journal.model';

@Injectable()
export class JournalService {
  constructor() { }

  fetchJournal(): Observable<ExaminerWorkSchedule> {
    const journal: ExaminerWorkSchedule = {
      testSlots: [],
      personalCommitments: [
        { id: '23456', name: 'holiday' },
        { id: '23457', name: 'coffee break' },
      ],
    };
    return new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next(journal);
      }, 1000);
    });
  }

}
