import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { CatCTestData } from '../../../../types/tests.model';
import { SetDownhillStart } from './test-data.cat-c.actions';

const CAT_C_TEST_DATA_STATE_TOKEN = new StateToken<CatCTestData>('testDataCatC');

@State<CatCTestData>({
  name: CAT_C_TEST_DATA_STATE_TOKEN,
  defaults: {
    downhillStart: false,
  }
})
@Injectable()
export class TestDataCatCState {

  @Action(SetDownhillStart)
  setUncoupleRecouple(context: StateContext<CatCTestData>, action: SetDownhillStart) {
    const state = context.getState();

    context.setState({
      ...state,
      downhillStart: action.downhillStart,
    });
  }

}
