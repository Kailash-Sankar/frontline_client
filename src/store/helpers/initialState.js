import { defaultLimit } from "@utils/constants";
import moment from "moment";

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
  dateRange: [moment(), moment()],
};

export { reportInitState };
