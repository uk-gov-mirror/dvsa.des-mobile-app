import * as fromJournal from '../journal.actions';

describe('loadJournals', () => {
  it('should return an action', () => {
    expect(fromJournal.LoadJournals().type).toBe('[Journal] Load Journals');
  });
});
