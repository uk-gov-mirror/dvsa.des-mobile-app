import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TestResultUnion, CatBETestResult } from '../../../types/tests.model';
import { TestsState } from '../../../modules/tests/tests.state';

@Component({
  selector: 'app-cat-be',
  templateUrl: './cat-be.page.html',
  styleUrls: ['./cat-be.page.scss'],
})
export class CatBePage implements OnInit {

  @Select(TestsState.getCurrentTest) testSlot$: Observable<CatBETestResult>;

  uncoupleRecoupleSwitch = true;

  constructor() { }

  ngOnInit() {
  }

  onToggleChange(status: boolean) {
    console.log(status);
  }

}
