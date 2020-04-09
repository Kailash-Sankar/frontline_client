import { defaultLimit } from "@utils/constants";

const reportInitState = {
  result: [],
  mode: undefined,
  region: ["KA"],
  service: [],
  pagination: {
    total: null,
    limit: defaultLimit,
    page: 1,
    pages: null,
  },
  dateRange: [null, null],
};

export { reportInitState };
