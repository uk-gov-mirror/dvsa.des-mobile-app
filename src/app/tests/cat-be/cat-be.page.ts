import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SetUncoupleRecouple } from 'src/modules/tests/test-data/cat-be/test-data.cat-be.actions';

import { selectCurrentTest } from '../../../modules/tests/tests.selector';
import { TestResultUnion } from '../../../types/tests.model';

@Component({
  selector: 'app-cat-be',
  templateUrl: './cat-be.page.html',
  styleUrls: ['./cat-be.page.scss'],
})
export class CatBePage implements OnInit {

  testResult$: Observable<TestResultUnion>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.testResult$ = this.store.select(selectCurrentTest);
  }

  onToggleChange(evt) {
    const value = evt.target.checked;

    this.store.dispatch(SetUncoupleRecouple({ uncoupleRecouple: value }));
  }

}
