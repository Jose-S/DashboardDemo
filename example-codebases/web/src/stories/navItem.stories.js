import React, { createRef } from "react";
import TestIcon from "../assets/icons/student.svg";
import NavitemLink from "../Components/Nav/NavItemLink";
import { BrowserRouter as Router } from "react-router-dom";
export default {
  title: "Nav Item",
  component: NavitemLink
};

export const Default = () => {
  const ref = React.createRef();

  return (
    <Router>
      <NavitemLink
        key="Screen"
        to="/Screen"
        title={"Screen"}
        iconSrc={TestIcon}
        onClick={() => {}}
        isOpen={false}
        ref={ref}
      ></NavitemLink>
    </Router>
  );
};

export const Active = () => {
  const ref = React.createRef();

  return (
    <Router>
      <NavitemLink
        key="Screen"
        to="/Screen"
        title={"Screen"}
        iconSrc={TestIcon}
        onClick={() => {}}
        isOpen={false}
        isActive={true}
        ref={ref}
      ></NavitemLink>
    </Router>
  );
};
