
export type TestCategory = 'B+E' | 'C';

export type Slot = {
  id: string;
  appRef: string;
  category: TestCategory;
};

export type PersonalCommitment = {
  id: string,
  name: string,
};

export type ExaminerWorkSchedule = {
  testSlots?: Slot[];
  personalCommitments?: PersonalCommitment[];
};

export interface JournalStateModel {
  slots: Slot[];
}
