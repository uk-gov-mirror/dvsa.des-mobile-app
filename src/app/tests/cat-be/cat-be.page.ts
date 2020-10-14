import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CatBETestData, CatBETestResult, CatCTestData } from '../../../types/tests.model';
import { TestsState } from '../../../modules/tests/tests.state';
import { SetUncoupleRecouple } from 'src/modules/tests/test-data/cat-be/test-data.cat-be.actions';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-cat-be',
  templateUrl: './cat-be.page.html',
  styleUrls: ['./cat-be.page.scss'],
})
export class CatBePage implements OnInit {

  @Select(TestsState.getCurrentTest) testSlot$: Observable<CatBETestResult>;
  testData$: Observable<CatBETestData | CatCTestData>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.testData$ = this.store.select(TestsState.getTestData);
  }

  onToggleChange(evt) {

    const value = evt.target.value;
    console.log('the event value', value);
    console.log('Uncouple recouple toggle has changed');
    this.store.dispatch(new SetUncoupleRecouple(!value));
  }

}
