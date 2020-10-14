import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadJournals } from '../modules/journal/journal.actions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private store: Store) {
    this.store.dispatch(LoadJournals());
  }

  OnInit() {
  }
}
