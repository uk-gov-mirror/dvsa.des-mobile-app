import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectCurrentTest } from '../../../modules/tests/tests.selector';
import { CatBETestData, CatCTestData, TestResultUnion } from '../../../types/tests.model';

@Component({
  selector: 'app-cat-be',
  templateUrl: './cat-be.page.html',
  styleUrls: ['./cat-be.page.scss'],
})
export class CatBePage implements OnInit {

  testData$: Observable<TestResultUnion>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.testData$ = this.store.select(selectCurrentTest);
  }

  onToggleChange(evt) {
    const isChecked = evt.target.checked;
    // this.store.dispatch();
  }

}
