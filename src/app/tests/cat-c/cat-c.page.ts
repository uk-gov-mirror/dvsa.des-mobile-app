import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectCurrentTest } from '../../../modules/tests/tests.selector';
import { CatBETestData, CatCTestData, TestResultUnion } from '../../../types/tests.model';

@Component({
  selector: 'app-cat-c',
  templateUrl: './cat-c.page.html',
  styleUrls: ['./cat-c.page.scss'],
})
export class CatCPage implements OnInit {

  testData$: Observable<TestResultUnion>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.testData$ = this.store.select(selectCurrentTest);
  }

}
