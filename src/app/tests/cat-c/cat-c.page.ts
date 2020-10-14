import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CatBETestData, CatCTestData, CatCTestResult } from '../../../types/tests.model';
import { TestsState } from '../../../modules/tests/tests.state';
import { SetDownhillStart } from 'src/modules/tests/test-data/cat-c/test-data.cat-c.actions';

@Component({
  selector: 'app-cat-c',
  templateUrl: './cat-c.page.html',
  styleUrls: ['./cat-c.page.scss'],
})
export class CatCPage implements OnInit {

  @Select(TestsState.getCurrentTest) testSlot$: Observable<CatCTestResult>;
  testData$: Observable<CatBETestData | CatCTestData>;

  downhillStartSwitch = true;

  constructor(private store: Store) { }

  ngOnInit() {
    this.testData$ = this.store.select(TestsState.getTestData);
  }

  onToggleChange(evt) {

    const value = evt.target.value;
    console.log('the event value', value);
    console.log('Uncouple recouple toggle has changed');
    this.store.dispatch(new SetDownhillStart(!value));
  }

}
