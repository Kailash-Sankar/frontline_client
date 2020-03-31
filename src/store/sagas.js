import { call, put, takeLatest } from "redux-saga/effects";
import Api from "@api";

import { types as reportTypes } from "./report";
import { types as volunteerTypes } from "./volunteerSignup";
import { types as commonTypes } from "./common";
import notify from "@utils/Notification";

function* helloSaga() {
  yield console.log("Hello there!");
}

function* initVolunteerCount() {
  const res = yield call(Api.getVolunteerCount);
  yield put({ type: commonTypes.SET_COUNT, volunteerCount: res });
}

function* search(action) {
  const res = yield call(Api.search, action.params);
  yield put({ type: reportTypes.SET_RESULT, result: res });
}

function* saveData(action) {
  try {
    const res = yield call(Api.saveFeature, action.formData);
    if (res.data.status === 1) {
      notify.singup(true, action.formData.name);
      yield put({ type: volunteerTypes.SET_RESET });
    } else {
      notify.singup(false, res.data.message, res.data.data[0].msg);
    }
  } catch (err) {
    notify.singup(false, "Backend error", "Try posting data again");
  }
}

export function* initSaga() {
  /// report
  yield takeLatest(reportTypes.SEARCH, search);

  // manage features
  yield takeLatest(volunteerTypes.SAVE, saveData);

  // load test
  yield helloSaga();
  yield initVolunteerCount();
}
