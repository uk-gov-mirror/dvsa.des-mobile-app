import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromJournal from './journal/journal.reducer';


export interface State {

  [fromJournal.journalFeatureKey]: fromJournal.ExaminersWorkSchedule;
}

export const reducers: ActionReducerMap<State> = {

  [fromJournal.journalFeatureKey]: fromJournal.JournalReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
