import { TestCategory } from './journal.model';


export type CommonTestResult = {
  id: string;
  category: TestCategory;
};

export type CatBEUniqueTypes = {
  uncoupleRecouple: boolean;
};

export type CatCUniqueTypes = {
  downhillStart: boolean;
};

export type CatBETestResult = CommonTestResult & CatBEUniqueTypes;
export type CatCTestResult = CommonTestResult & CatCUniqueTypes;

export type TestResultUnion = CatBETestResult | CatCTestResult;

export type TestsStateModel = {

  currentTest: {
    slotId?: string;
  }

  startedTests: TestResultUnion[];
};
