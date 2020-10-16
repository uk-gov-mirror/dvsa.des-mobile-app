import { Component, OnInit } from '@angular/core';
import { JournalService } from 'src/services/journal/journal.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  constructor(private journalService: JournalService) { }

  ngOnInit() {
  }

  onLoadJournalClick() {
    console.log('akita store dispatch LoadJournal');

    this.journalService.fetchJournal();
  }

}
