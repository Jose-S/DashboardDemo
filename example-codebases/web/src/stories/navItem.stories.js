import React from "react";
import NavItem from "../Components/Nav/navItem";
import TestIcon from "../assets/icons/student.svg";

export default {
  title: "Nav Item",
  component: NavItem
};

export const Default = () => <NavItem title={"Screen"} iconSrc={TestIcon}></NavItem>;
