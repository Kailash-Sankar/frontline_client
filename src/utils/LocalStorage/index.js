import notify from "@utils/Notification";
import { authStoreKey, userStoreKey } from "@utils/constants";

// local storage functions
function set(key, value) {
  if (typeof Storage == "undefined") {
    notify.base("LocalStorage is not supported");
    return false;
  }

  const strValue = JSON.stringify(value);
  try {
    window.localStorage.setItem(key, strValue);
  } catch (e) {
    notify.base("Local storage error.");
  }
  return true;
}

function get(key) {
  if (typeof Storage == "undefined") {
    return null;
  }
  const value = JSON.parse(localStorage.getItem(key));
  return value;
}

function remove(key) {
  if (typeof Storage == "undefined") {
    return false;
  }
  localStorage.removeItem(key);
  return true;
}

// generic storage closure wrapper
export const generateStorageHandle = (key) => {
  return {
    set: (value) => set(key, value),
    get: () => get(key),
    remove: () => remove(key)
  };
};

// wrapper for auth storage
export const authStorage = generateStorageHandle(authStoreKey);
export const userStorage = generateStorageHandle(userStoreKey);

export default {
  get,
  set
};
