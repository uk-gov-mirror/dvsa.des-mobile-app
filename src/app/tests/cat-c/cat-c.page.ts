import { Component, OnInit } from '@angular/core';
import { TestsQuery } from '../../../modules/tests/tests.query';


@Component({
  selector: 'app-cat-c',
  templateUrl: './cat-c.page.html',
  styleUrls: ['./cat-c.page.scss'],
})
export class CatCPage implements OnInit {

  testData$ = this.testsQuery.currentTest$;

  constructor(private testsQuery: TestsQuery) { }

  ngOnInit() {
  }

  onToggleChange(evt) {
    const isChecked = evt.target.checked;
    // this.store.dispatch();
  }

}
