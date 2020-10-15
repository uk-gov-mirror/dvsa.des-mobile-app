
import { createSelector } from '@ngrx/store';
import { JournalStateModel, Slot } from '../../types/journal.model';
import { StoreModel } from '../../types/store.model';

export const selectJournal = (state: StoreModel): JournalStateModel => state.journal;

export const selectSlots = createSelector(
  selectJournal,
  (journal: JournalStateModel): Slot[] => journal.slots,
);

export const selectIsLoading = createSelector(
  selectJournal,
  (journal: JournalStateModel): boolean => journal.isLoading,
);
