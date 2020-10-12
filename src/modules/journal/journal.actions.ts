
export class LoadJournal {
  static readonly type = '[Journal API] Load Journal';
}

export class LoadJournalSuccess {
  static readonly type = '[Journal API] Load Journal Success';
  constructor(public data: any) {}
}

export class LoadJournalFailure {
  static readonly type = '[Journal API] Load Journal Failure';
}
