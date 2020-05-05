import { call, put, takeLatest } from "redux-saga/effects";
import Api from "@api";

import { types as reportTypes } from "./report";
import { types as volunteerTypes } from "./volunteerSignup";
import { types as commonTypes } from "./common";
import { types as kindTypes } from "./kind";
import { types as kindReportTypes } from "./kindReport";
import { types as appealTypes } from "./appeal";
import { types as homeTypes } from "./homeContent";
import { types as appealReportTypes } from "./appealReport";
import { types as requestReportTypes } from "./requestReport";
import { types as requestForHelpTypes } from "./requestForHelp";
import { types as ngoSignupTypes } from "./ngoSignup";

import notify from "@utils/Notification";
import { authStorage } from "@utils/LocalStorage";
import { buildUserInfo, formatPagination } from "./utils";
import { triggerExport } from "@utils/Export";

// initialize  and check auth
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
          user: userInfo,
        });
      }
    }
  } catch (err) {
    console.log("No active session");
  }
}

// TODO: repurpose
function* initVolunteerCount() {
  const res = yield call(Api.getVolunteerCount);
  yield put({ type: commonTypes.SET_COUNT, volunteerCount: res });
}

// reports search
function* search(scope, apiFn, action) {
  try {
    const res = yield call(apiFn, action.params);
    yield put({ type: scope.SET_RESULT, result: res.docs || [] });
    yield put({
      type: scope.SET_PAGINATION,
      pagination: formatPagination(res),
    });
  } catch (err) {
    if (err.response.status === 401) {
      notify.base("Session expired", "Please login again");
      yield put({ type: commonTypes.LOGOUT });
    } else {
      notify.base("Error, please reload and try again");
    }
  }
}

// get appeals for home page
function* fetchAppeals() {
  try {
    const res = yield call(Api.fetchAppeals);
    yield put({ type: homeTypes.SET_APPEALS, appeals: res.docs || [] });
  } catch (err) {
    // fail silently
    console.log("fetching failed", err);
  }
}

// volunteer and kind save actions
function* saveData(scope, action) {
  try {
    const res = yield call(Api.saveForm, action.formData);
    if (res.data.status === 1) {
      notify.info(true, action.formData.name);
      yield put({ type: scope.SET_RESET });
    } else {
      notify.info(false, res.data.message, res.data.data[0].msg);
    }
  } catch (err) {
    console.log("save error", err);
    notify.info(false, "Backend error", "Try posting data again");
  }
}

// volunteer and kind save actions
function* saveNgoData(scope, action) {
  try {
    const res = yield call(Api.saveNgoForm, action.formData);
    if (res.data.status === 1) {
      notify.info(true, action.formData.name);
      yield put({ type: scope.SET_RESET });
    } else {
      notify.info(false, res.data.message, res.data.data[0].msg);
    }
  } catch (err) {
    console.log("save error", err);
    notify.info(false, "Backend error", "Try posting data again");
  }
}

function* saveRequestForHelp(scope, action) {
  try {
    const res = yield call(Api.saveHelpRequest, action.formData);
    if (res.data.status === 1) {
      notify.base("Request submitted successfully.");
      yield put({ type: scope.SET_RESET });
    } else {
      notify.info(false, res.data.message, res.data.data[0].msg);
    }
  } catch (err) {
    notify.info(false, "Backend error", "Try posting data again");
  }
}

// appeal save action
function* saveAppealData(scope, action) {
  try {
    const res = yield call(Api.saveAppealForm, action.formData);
    if (res.data.status === 1) {
      notify.base(res.data.message);
      yield put({ type: scope.SET_RESET });
    } else {
      notify.base("Unable to save appeal", res.data.message);
    }
  } catch (err) {
    console.log("appeal err", err);
    notify.base("Server error", "Try posting data again");
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
        user: userInfo,
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
      user: {},
    });
  } catch (err) {
    notify.base("Logout failed");
  }
}

// TODO: add spinner during wait for export
function* exportCSV(scope, apiFn, action) {
  try {
    const res = yield call(apiFn, action.params);
    triggerExport({ result: res, act: action.params.query.act });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      notify.base("Session expired", "Please login again");
      yield put({ type: commonTypes.LOGOUT });
    } else {
      notify.base("Error, please reload and try again");
    }
  }
}

function* updateStatusVal(scope, action) {
  const res = yield call(Api.updateStatus, action.endPoint, action.formData);
  try {
    if (res.data.status === 1) {
      yield put({
        type: scope.UPDATE_RESULT,
        id: res.data.data._id,
        status: res.data.data.status,
      });
      notify.base("Updated successfully");
    } else {
      notify.base("Unable to update the status.");
    }
  } catch (err) {
    notify.base("Server error", "Try posting data again");
  }
}

export function* initSaga() {
  // reports
  yield takeLatest(reportTypes.SEARCH, search, reportTypes, Api.search);
  yield takeLatest(kindReportTypes.SEARCH, search, kindReportTypes, Api.search);
  yield takeLatest(
    appealReportTypes.SEARCH,
    search,
    appealReportTypes,
    Api.searchAppeals
  );
  yield takeLatest(
    requestReportTypes.SEARCH,
    search,
    requestReportTypes,
    Api.searchRequests
  );

  // exports
  yield takeLatest(
    appealReportTypes.EXPORT_CSV,
    exportCSV,
    appealReportTypes,
    Api.exportAppeals
  );
  yield takeLatest(
    requestReportTypes.EXPORT_CSV,
    exportCSV,
    requestReportTypes,
    Api.exportRequests
  );
  yield takeLatest(
    kindReportTypes.EXPORT_CSV,
    exportCSV,
    kindReportTypes,
    Api.exportKind
  );
  yield takeLatest(
    reportTypes.EXPORT_CSV,
    exportCSV,
    reportTypes,
    Api.exportKind
  );

  //update the status column of entry.
  yield takeLatest(
    requestReportTypes.UPDATE_STATUS,
    updateStatusVal,
    requestReportTypes
  );
  yield takeLatest(
    appealReportTypes.UPDATE_STATUS,
    updateStatusVal,
    appealReportTypes
  );
  yield takeLatest(
    kindReportTypes.UPDATE_STATUS,
    updateStatusVal,
    kindReportTypes
  );

  // save volunteers and kind
  yield takeLatest(volunteerTypes.SAVE, saveData, volunteerTypes);
  yield takeLatest(kindTypes.SAVE, saveData, kindTypes);
  yield takeLatest(ngoSignupTypes.SAVE, saveNgoData, ngoSignupTypes);

  // save request for help form
  yield takeLatest(
    requestForHelpTypes.SAVE,
    saveRequestForHelp,
    requestForHelpTypes
  );

  // save appeal
  yield takeLatest(appealTypes.SAVE, saveAppealData, appealTypes);

  // auth
  yield takeLatest(commonTypes.LOGIN, login);
  yield takeLatest(commonTypes.LOGOUT, logout);

  // home page
  yield takeLatest(homeTypes.FETCH_APPEALS, fetchAppeals);

  // load test
  yield helloSaga();
  yield initVolunteerCount();
}
