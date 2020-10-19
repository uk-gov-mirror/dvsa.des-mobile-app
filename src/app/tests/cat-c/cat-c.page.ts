import { Component, OnInit } from '@angular/core';
import { TestsCatCService } from 'src/services/tests/cat-c/tests.cat-c.service';
import { TestsQuery } from '../../../modules/tests/tests.query';

@Component({
  selector: 'app-cat-c',
  templateUrl: './cat-c.page.html',
  styleUrls: ['./cat-c.page.scss'],
})
export class CatCPage implements OnInit {

  testResult$ = this.testsQuery.currentTest$;

  constructor(
    private testsQuery: TestsQuery,
    private testsCatCService: TestsCatCService,
  ) {}

  ngOnInit() {
  }

  onToggleChange(evt) {
    const isChecked = evt.target.checked;

    this.testsCatCService.setDownhillStart(isChecked);
  }

}
