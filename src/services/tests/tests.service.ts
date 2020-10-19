import { Injectable } from '@angular/core';
import { TestsStore } from '../../modules/tests/tests.store';
import { JournalQuery } from '../../modules/journal/journal.query';
import { CatBETestResult, CatCTestResult } from 'src/types/tests.model';
import { TestsQuery } from 'src/modules/tests/tests.query';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor(
    private testsStore: TestsStore,
    private testsQuery: TestsQuery,
    private journalQuery: JournalQuery,
  ) {}

  public setCurrentTest(slotId: string): void {

    if (this.slotExists(slotId)) {
      this.testsStore.update(state => ({
        ...state,
        currentTest: { slotId },
      }));

      return;
    }

    const journalSlots = this.journalQuery.allJournalSlots;
    const selectedSlot = journalSlots.find(slot => slot.id === slotId);

    const category = selectedSlot.category;
    const resultingSlot = { slot: null };

    switch (category) {
      case 'B+E':
        const catBETestResult: CatBETestResult = { ...selectedSlot };
        resultingSlot.slot = catBETestResult;
        break;
      case 'C':
        const catCTestResult: CatCTestResult = { ...selectedSlot };
        resultingSlot.slot = catCTestResult;
        break;
      default:
        break;
    }

    this.testsStore.update(state => ({
      currentTest: { slotId },
      startedTests: [
        ...state.startedTests,
        resultingSlot.slot
      ]
    }));
  }

  private slotExists(slotId: string): boolean {
    return this.testsQuery.getValue().startedTests.some(test => test.id === slotId);
  }

}
