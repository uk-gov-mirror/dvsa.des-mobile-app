
export type TestCategory = 'B+E' | 'C';

export type Slot = {
  id: string,
  appRef: string,
  driverNum: string,
  category: TestCategory,
  startDate: string,
  endDate: string,
};

export type SearchStateModel = {
  isLoading: boolean,
  error?: any,
  results: Slot[],
};
