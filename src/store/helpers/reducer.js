import update from "immutability-helper";

// generates dispatcher function for reports, accepts custom actions
function generateReportDispatcher(types, custom = {}) {
  return (dispatch) => ({
    setResult: (result) =>
      dispatch({
        type: types.SET_RESULT,
        result,
      }),
    setMode: (mode) =>
      dispatch({
        type: types.SET_MODE,
        mode,
      }),
    setRegion: (region) =>
      dispatch({
        type: types.SET_REGION,
        region,
      }),
    setService: (service) =>
      dispatch({
        type: types.SET_SERVICE,
        service,
      }),
    search: (params) =>
      dispatch({
        type: types.SEARCH,
        params,
      }),
    setDateRange: (dateRange) =>
      dispatch({
        type: types.SET_DATE_RANGE,
        dateRange,
      }),
    exportCSV: (params) =>
      dispatch({
        type: types.EXPORT_CSV,
        params,
      }),
    setStatus: (status) =>
      dispatch({
        type: types.SET_STATUS,
        status,
      }),
    ...custom,
  });
}

// generates report reducer, accepts custom actions
function generateReportReducer(types, initialState, customReducer = null) {
  return (state = initialState, action) => {
    switch (action.type) {
      case types.SET_RESULT:
        return update(state, {
          result: { $set: action.result },
        });
      case types.SET_MODE:
        return update(state, {
          mode: { $set: action.mode },
        });
      case types.SET_REGION:
        return update(state, {
          region: { $set: action.region },
        });
      case types.SET_SERVICE:
        return update(state, {
          service: { $set: action.service },
        });
      case types.SET_PAGINATION:
        return update(state, {
          pagination: { $set: action.pagination },
        });
      case types.SET_DATE_RANGE:
        return update(state, {
          dateRange: { $set: action.dateRange },
        });
      case types.SET_STATUS:
        return update(state, {
          status: { $set: action.status },
        });
    }
    if (customReducer) {
      return customReducer(action);
    }
    return state;
  };
}

export { generateReportDispatcher, generateReportReducer };
