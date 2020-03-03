// in src/Menu.js
import React, { createElement } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@material-ui/core";
import { MenuItemLink, getResources } from "react-admin";
import { withRouter } from "react-router-dom";
import LabelIcon from "@material-ui/icons/Label";
import Navitem from "../Components/Nav/navItem";
import TestIcon from "../assets/icons/student.svg";
import NavitemLink from "../Components/Nav/navItemLink";

const Menu = ({ onMenuClick, logout }) => {
  const isXSmall = useMediaQuery(theme => theme.breakpoints.down("xs"));
  const open = useSelector(state => state.admin.ui.sidebarOpen);
  const resources = useSelector(getResources);
  console.log(open);
  return (
    <div>
      {resources.map(resource => (
        <NavitemLink
          key={resource.name}
          to={`/${resource.name}`}
          title={(resource.options && resource.options.label) || resource.name}
          iconSrc={resource.icon}
          onClick={onMenuClick}
          isOpen={true}
        />
        // <MenuItemLink
        //   key={resource.name}
        //   to={`/${resource.name}`}
        //   primaryText={(resource.options && resource.options.label) || resource.name}
        //   leftIcon={resource.icon !== undefined ? createElement(resource.icon) : null}
        //   onClick={onMenuClick}
        //   sidebarIsOpen={false}
        // />
      ))}
      {/* <NavItem title={"Screen"} iconSrc={TestIcon}></NavItem> */}
      {/* <MenuItemLink
        to="/custom-route"
        primaryText="Miscellaneous"
        leftIcon={<LabelIcon />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
      /> */}
      {isXSmall && logout}
    </div>
  );
};

export default withRouter(Menu);
