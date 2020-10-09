
export class SetCurrentTest {
    static readonly type = '[Tests API] Set Current Test';
    constructor(public testId: string) {}
  }

export class AddStartedTest {
    static readonly type = '[Tests API] Add Started Test';
}
  