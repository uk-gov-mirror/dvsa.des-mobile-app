import { Injectable } from '@angular/core';
import { TestsStore } from '../../modules/tests/tests.store';
import { JournalQuery } from '../../modules/journal/journal.query';
import { Slot } from '../../types/journal.model';
import { TestResultUnion } from 'src/types/tests.model';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  journalSlots: Slot[];
  startedTest: TestResultUnion;

  constructor(private testsStore: TestsStore, private journalQuery: JournalQuery) { }

  public setCurrentTest(slotId: string): void {

    this.journalSlots = this.journalQuery.allJournalSlots;
    this.startedTest = this.journalSlots.find(slot => slot.id === slotId);

    this.testsStore.update(state => ({
      currentTest: { slotId },
      startedTests: [
        ...state.startedTests,
        this.startedTest
      ]
    }));
  }
}
