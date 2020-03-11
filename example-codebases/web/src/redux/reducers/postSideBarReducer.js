import { UI_POST_SIDEBAR } from "../constants/action-types";

// in src/postSideBarReducer.js
export default (previousState = false, { type, payload }) => {
  if (type === UI_POST_SIDEBAR) {
    return payload.isOpen;
  }
  return previousState;
};
