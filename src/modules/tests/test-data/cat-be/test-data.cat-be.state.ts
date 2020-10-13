import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { CatBETestData } from '../../../../types/tests.model';
import { SetUncoupleRecouple } from './test-data.cat-be.actions';

const CAT_BE_TEST_DATA_STATE_TOKEN = new StateToken<CatBETestData>('testDataCatBE');

@State<CatBETestData>({
  name: CAT_BE_TEST_DATA_STATE_TOKEN,
  defaults: {
    uncoupleRecouple: false,
  },
})
@Injectable()
export class TestDataCatBEState {

  @Action(SetUncoupleRecouple)
  setUncoupleRecouple(context: StateContext<CatBETestData>, action: SetUncoupleRecouple) {
    const state = context.getState();

    context.setState({
      ...state,
      uncoupleRecouple: action.uncoupleRecouple,
    });
  }

}
