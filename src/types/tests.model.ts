import { TestCategory } from './journal.model';

export type CommonTestResult = {
  id: string;
  appRef: string;
  category: TestCategory;
};

export type CatBETestData = {
  uncoupleRecouple: boolean;
};

export type CatCTestData = {
  downhillStart: boolean;
};

export type CatBEUniqueTypes = {
  testData?: CatBETestData;
};

export type CatCUniqueTypes = {
  testData?: CatCTestData;
};

export type CatBETestResult = CommonTestResult & CatBEUniqueTypes;
export type CatCTestResult = CommonTestResult & CatCUniqueTypes;

export type TestResultUnion = CatBETestResult | CatCTestResult;

export type TestsStateModel = {
  currentTest: {
    slotId?: string;
  },
  startedTests: TestResultUnion[],
};
