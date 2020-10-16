import { Component, OnInit } from '@angular/core';
import { JournalService } from 'src/services/journal/journal.service';

import { JournalQuery } from '../../modules/journal/journal.query';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  slots$ = this.journalQuery.allSlots$;
  isLoading$ = this.journalQuery.isLoading$;

  constructor(private journalService: JournalService, private journalQuery: JournalQuery) { }

  ngOnInit() {
  }

  onLoadJournalClick() {
    this.journalService.fetchJournal();
  }

}
