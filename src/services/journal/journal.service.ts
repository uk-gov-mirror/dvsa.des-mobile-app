import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { JournalStore } from 'src/modules/journal/journal.store';
import { ExaminerWorkSchedule } from '../../types/journal.model';

@Injectable()
export class JournalService {

  constructor(private journalStore: JournalStore) { }

  public async fetchJournal(): Promise<void> {
    this.journalStore.setLoading(true);
    try {
      const data = await of(this.getJournalData())
        .pipe(delay(1000)).toPromise();

      this.journalStore.update({ slots: data.testSlots });
      this.journalStore.setLoading(false);
    } catch (error) {
      this.journalStore.setLoading(false);
      this.journalStore.setError(error);
    }
  }

  private getJournalData(): ExaminerWorkSchedule {
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

    return journal;
  }

}
