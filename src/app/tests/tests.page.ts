import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TestResultUnion } from '../../types/tests.model';
import { TestsState } from 'src/modules/tests/tests.state';

@Component({
    selector: 'app-tests',
    templateUrl: './tests.page.html',
    styleUrls: ['./tests.page.scss'],
})
export class TestsPage implements OnInit {

  @Select(TestsState.getCurrentTest) testSlot$: Observable<TestResultUnion>;

  constructor() {}

  ngOnInit() {}
}
