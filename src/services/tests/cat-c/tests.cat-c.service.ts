import { Injectable } from '@angular/core';
import { CatCTestData } from 'src/types/tests.model';
import { TestsQuery } from '../../../modules/tests/tests.query';
import { TestsStore } from '../../../modules/tests/tests.store';

@Injectable({
  providedIn: 'root',
})
export class TestsCatCService {
  constructor(
    private testsStore: TestsStore,
    private testsQuery: TestsQuery,
  ) {}

  setDownhillStart(downhillStart: boolean) {

    const catCTestData: CatCTestData = {
      ...this.testsQuery.currentTest.testData,
      downhillStart,
    };

    this.testsStore.updateCatCTestData(catCTestData);

  }
}
