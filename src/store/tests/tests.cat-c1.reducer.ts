import { Action, combineReducers } from '@ngrx/store';
import { CatC1UniqueTypes } from '@dvsa/mes-test-schema/categories/C1';
import { schemaVersionReducer } from './schema-version/schema-version.reducer';
import { categoryReducer } from './category/category.reducer';
import { accompanimentReducer } from './accompaniment/accompaniment.reducer';
import { postTestDeclarationsReducer } from './post-test-declarations/post-test-declarations.reducer';
import { communicationPreferencesReducer } from './communication-preferences/communication-preferences.reducer';
import { rekeyReducer } from './rekey/rekey.reducer';
import { rekeyDateReducer } from './rekey-date/rekey-date.reducer';
import { rekeyReasonReducer } from './rekey-reason/rekey-reason.reducer';
import { examinerBookedReducer } from './examiner-booked/examiner-booked.reducer';
import { examinerConductedReducer } from './examiner-conducted/examiner-conducted.reducer';
import { examinerKeyedReducer } from './examiner-keyed/examiner-keyed.reducer';
import { activityCodeReducer } from './activity-code/activity-code.reducer';
import { journalDataCatCReducer } from './journal-data/cat-c/journal-data.cat-c.reducer';
import { vehicleDetailsCatCReducer } from './vehicle-details/cat-c/vehicle-details.cat-c.reducer';
import { testDataCatC1Reducer } from './test-data/cat-c/test-data.cat-c1.reducer';
import { passCompletionReducer } from './pass-completion/pass-completion.reducer';
import { delegatedTestReducer } from './delegated-test/delegated-test.reducer';
import { changeMarkerReducer } from './change-marker/change-marker.reducer';
import { testSummaryReducer } from './test-summary/test-summary.reducer';
import { preTestDeclarationsReducer } from './pre-test-declarations/pre-test-declarations.reducer';

export function testsCatC1Reducer(
  action: Action,
  state: CatC1UniqueTypes.TestResult,
): Required<CatC1UniqueTypes.TestResult> {
  return combineReducers(
    {
      accompaniment: accompanimentReducer,
      activityCode: activityCodeReducer,
      category: categoryReducer,
      changeMarker: changeMarkerReducer,
      communicationPreferences: communicationPreferencesReducer,
      delegatedTest: delegatedTestReducer,
      examinerBooked: examinerBookedReducer,
      examinerConducted: examinerConductedReducer,
      examinerKeyed: examinerKeyedReducer,
      journalData: journalDataCatCReducer,
      passCompletion: passCompletionReducer,
      postTestDeclarations: postTestDeclarationsReducer,
      preTestDeclarations: preTestDeclarationsReducer,
      rekey: rekeyReducer,
      rekeyDate: rekeyDateReducer,
      rekeyReason: rekeyReasonReducer,
      testData: testDataCatC1Reducer,
      testSummary: testSummaryReducer,
      vehicleDetails: vehicleDetailsCatCReducer,
      version: schemaVersionReducer,
    },
  )(
    state as Required<CatC1UniqueTypes.TestResult>,
    action,
  );
}
