import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TestResultUnion, CatCTestResult } from '../../../types/tests.model';
import { TestsState } from '../../../modules/tests/tests.state';

@Component({
  selector: 'app-cat-c',
  templateUrl: './cat-c.page.html',
  styleUrls: ['./cat-c.page.scss'],
})
export class CatCPage implements OnInit {

  @Select(TestsState.getCurrentTest) testSlot$: Observable<CatCTestResult>;

  downhillStartSwitch = true;

  constructor() { }

  ngOnInit() {
  }

  onToggleChange(status: boolean) {
    console.log(status);
  }

}
