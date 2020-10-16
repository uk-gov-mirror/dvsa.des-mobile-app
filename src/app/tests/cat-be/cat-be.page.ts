import { Component, OnInit } from '@angular/core';
import { TestsQuery } from '../../../modules/tests/tests.query';

@Component({
  selector: 'app-cat-be',
  templateUrl: './cat-be.page.html',
  styleUrls: ['./cat-be.page.scss'],
})
export class CatBePage implements OnInit {

  testData$ = this.testsQuery.currentTest$;

  constructor(private testsQuery: TestsQuery) { }

  ngOnInit() {
  }

  onToggleChange(evt) {
    const isChecked = evt.target.checked;
    // this.store.dispatch();
  }

}
