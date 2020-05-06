import { authStoreKey, userStoreKey } from "@utils/constants";
import StoreWrap from "store-wrap";

// generate store handles
const authStorage = StoreWrap.generateHandle("localStorage", authStoreKey);
const userStorage = StoreWrap.generateHandle("localStorage", userStoreKey);

export { authStorage, userStorage };
