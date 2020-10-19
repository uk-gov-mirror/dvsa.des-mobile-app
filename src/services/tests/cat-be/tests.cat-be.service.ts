import { Injectable } from '@angular/core';
import { TestsQuery } from 'src/modules/tests/tests.query';
import { TestsStore } from '../../../modules/tests/tests.store';
import { CatBETestData } from '../../../types/tests.model';

@Injectable({
  providedIn: 'root',
})
export class TestsCatBEService {
  constructor(
    private testsStore: TestsStore,
    private testsQuery: TestsQuery,
  ) {}

  setUncoupleRecouple(uncoupleRecouple: boolean) {

    const catBETestData: CatBETestData = {
      ...this.testsQuery.currentTest.testData,
      uncoupleRecouple,
    };

    this.testsStore.updateCatBETestData(catBETestData);
  }
}
