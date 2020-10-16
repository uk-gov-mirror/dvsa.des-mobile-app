import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SetDownhillStart } from 'src/modules/tests/test-data/cat-c/test-data.cat-c.actions';

import { selectCurrentTest } from '../../../modules/tests/tests.selector';
import { CatBETestData, CatCTestData, TestResultUnion } from '../../../types/tests.model';

@Component({
  selector: 'app-cat-c',
  templateUrl: './cat-c.page.html',
  styleUrls: ['./cat-c.page.scss'],
})
export class CatCPage implements OnInit {

  testResult$: Observable<TestResultUnion>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.testResult$ = this.store.select(selectCurrentTest);
  }

  onToggleChange(evt) {
    const isChecked = evt.target.checked;

    this.store.dispatch(SetDownhillStart({ downhillStart: isChecked }));
  }

}
