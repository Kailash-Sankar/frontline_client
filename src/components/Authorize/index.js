import { connecter } from "@store/common";
import Fallback from "./Fallback";

// connects to common store and checks role based on input list
// a fallback is render if passed, leave empty otherwise
// standard fallback templates are defined and exported
function Authorize({ roles, user, children, fallback }) {
  // check role
  if (roles.includes(user.role)) {
    return children;
  }
  // fallback to render
  return fallback ? fallback : null;
}

Authorize.defaultProps = {
  roles: [],
  user: {},
  fallback: "",
};

export default connecter(Authorize);

export { Fallback };
