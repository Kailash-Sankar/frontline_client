import { call, put, takeLatest } from "redux-saga/effects";
import Api from "@api";

import { types as reportTypes } from "./report";
import { types as volunteerTypes } from "./volunteerSignup";
import { types as commonTypes } from "./common";

import notify from "@utils/Notification";
import { authStorage } from "@utils/LocalStorage";
import { buildUserInfo } from "./utils";

function* helloSaga() {
  yield console.log("Hello there!");
  try {
    const token = authStorage.get();
    if (token) {
      const res = yield call(Api.authCheck);
      // restore user session if any
      if (res.data.status === 1) {
        const userInfo = buildUserInfo(res.data.data);
        yield put({ type: commonTypes.SET_AUTH, loggedIn: true });
        yield put({
          type: commonTypes.SET_USER,
          user: userInfo
        });
      }
    }
  } catch (err) {
    console.log("No active session");
  }
}

function* initVolunteerCount() {
  const res = yield call(Api.getVolunteerCount);
  yield put({ type: commonTypes.SET_COUNT, volunteerCount: res });
}

function* search(action) {
  try {
    const res = yield call(Api.search, action.params);
    yield put({ type: reportTypes.SET_RESULT, result: res });
  } catch (err) {
    notify.base("Session expired", "Please login again");
    yield put({ type: commonTypes.LOGOUT });
  }
}

function* saveData(action) {
  console.log(action);
  try {
    const res = yield call(Api.saveForm, action.formData);
    if (res.data.status === 1) {
      notify.singup(true, action.formData.name);
      yield put({ type: volunteerTypes.SET_RESET });
    } else {
      notify.singup(false, res.data.message, res.data.data[0].msg);
    }
  } catch (err) {
    console.log(err);
    notify.singup(false, "Backend error", "Try posting data again");
  }
}

function* login(action) {
  try {
    const res = yield call(Api.login, action.formData);

    if (res.data.status == 1) {
      notify.base("Logged in Successfully!");
      const data = res.data.data;

      authStorage.set(data.token);
      const userInfo = buildUserInfo(data);

      yield put({ type: commonTypes.SET_AUTH, loggedIn: true });
      yield put({
        type: commonTypes.SET_USER,
        user: userInfo
      });
    } else {
      notify.base("Login failed, try again.", res.data.message);
    }
  } catch (err) {
    notify.base("Login failed");
  }
}

function* logout() {
  try {
    authStorage.remove();

    yield put({ type: commonTypes.SET_AUTH, loggedIn: false });
    yield put({
      type: commonTypes.SET_USER,
      user: {}
    });
  } catch (err) {
    notify.base("Logout failed");
  }
}

export function* initSaga() {
  /// report
  yield takeLatest(reportTypes.SEARCH, search);

  // manage features
  yield takeLatest(volunteerTypes.SAVE, saveData);

  // auth
  yield takeLatest(commonTypes.LOGIN, login);
  yield takeLatest(commonTypes.LOGOUT, logout);

  // load test
  yield helloSaga();
  yield initVolunteerCount();
}
