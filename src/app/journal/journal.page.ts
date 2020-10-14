import { Component, OnInit } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StoreModel } from '../../types/store.model';

import { LoadJournal } from '../../modules/journal/journal.actions';
import { Slot } from '../../types/journal.model';
import { selectIsLoading, selectSlots } from 'src/modules/journal/journal.selector';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  slots$: Observable<Slot[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<StoreModel>) { }

  ngOnInit() {
    this.slots$ = this.store.select(selectSlots);
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  onLoadJournalClick() {
    this.store.dispatch(LoadJournal());
  }

}
