import React from "react";
import TestIcon from "../assets/icons/student.svg";
import NavitemLink from "../Components/Nav/navItemLink";
import { BrowserRouter as Router } from "react-router-dom";
export default {
  title: "Nav Item Link",
  component: NavitemLink
};

export const Default = () => (
  <Router>
    <NavitemLink
      key="Screen"
      to="/Screen"
      title={"Screen"}
      iconSrc={TestIcon}
      onClick={() => {}}
    ></NavitemLink>
  </Router>
);
