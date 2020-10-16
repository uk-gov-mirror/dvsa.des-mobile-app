import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalService } from 'src/services/journal/journal.service';
import { TestsService } from 'src/services/tests/tests.service';

import { JournalQuery } from '../../modules/journal/journal.query';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  slots$ = this.journalQuery.allSlots$;
  isLoading$ = this.journalQuery.isLoading$;

  constructor(
    private router: Router,
    private journalService: JournalService,
    private journalQuery: JournalQuery,
    private testsService: TestsService) { }

  ngOnInit() {
  }

  onLoadJournalClick() {
    this.journalService.fetchJournal();
  }

  onStartTestClick(slotId: string, category: string) {
    console.log(`slot ${slotId} will be started with category ${category}`);
    this.testsService.setCurrentTest(slotId);
    this.router.navigate([category]);
  }

}
