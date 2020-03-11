import { UI_POST_SIDEBAR } from "../constants/action-types";

export function setPostSideBar(payload) {
  return { type: UI_POST_SIDEBAR, payload };
}
