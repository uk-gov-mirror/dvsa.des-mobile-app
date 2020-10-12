import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Slot } from '../../types/journal.model';
import { LoadJournal } from '../../modules/journal/journal.actions';
import { SetCurrentTest } from '../../modules/tests/tests.actions';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  slots$: Observable<Slot>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.slots$ = this.store.select(state => state.journal.slots);
  }

  onLoadJournalClick = () => {
    console.log('Load Journal event initiation');
    this.store.dispatch(new LoadJournal());
  }

  onStartTestClick = (slotId: string) => {
    console.log(`slot ${slotId} will be started`);
    this.store.dispatch(new SetCurrentTest(slotId));
    this.router.navigate(['tests']);
  }

}
