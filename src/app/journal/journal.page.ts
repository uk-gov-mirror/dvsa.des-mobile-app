import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoadJournal } from '../modules/journal/journal.actions';
import { ExaminersWorkSchedule, Slot } from '../modules/journal/journal.reducer';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  slots$: Observable<Slot[]>;

  constructor(private store: Store<{ journal: ExaminersWorkSchedule}>) { }

  ngOnInit() {
    this.slots$ = this.store.select(state => state.journal.testsSlots);
  }

  onLoadJournalClick() {
    this.store.dispatch(LoadJournal());
  }

}
