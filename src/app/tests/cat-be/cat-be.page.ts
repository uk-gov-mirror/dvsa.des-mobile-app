import { Component, OnInit } from '@angular/core';
import { TestsCatBEService } from 'src/services/tests/cat-be/tests.cat-be.service';
import { TestsQuery } from '../../../modules/tests/tests.query';

@Component({
  selector: 'app-cat-be',
  templateUrl: './cat-be.page.html',
  styleUrls: ['./cat-be.page.scss'],
})
export class CatBePage implements OnInit {

  testResult$ = this.testsQuery.currentTest$;

  constructor(
    private testsQuery: TestsQuery,
    private testsCatBEService: TestsCatBEService,
  ) {}

  ngOnInit() {
  }

  onToggleChange(evt) {
    const isChecked = evt.target.checked;

    this.testsCatBEService.setUncoupleRecouple(isChecked);
  }

}
