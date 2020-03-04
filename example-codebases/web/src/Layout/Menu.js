import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@material-ui/core";
import { getResources } from "react-admin";
import { withRouter } from "react-router-dom";

import NavitemLink from "../Components/Nav/NavItemLink";
import NavIndicator from "../Components/Nav/NavIndicator";

const Menu = ({ onMenuClick, logout, ...props }) => {
  const isXSmall = useMediaQuery(theme => theme.breakpoints.down("xs"));
  const location = props.location.pathname;
  const open = useSelector(state => state.admin.ui.sidebarOpen);
  const resources = useSelector(getResources);
  const ref = React.createRef();
  let flat = resources.reduce((total, val) => total.concat(val.name), []);
  let curentIndex = flat.indexOf(location.replace("/", ""));
  //   const [prevLoc, setNewLoc] = useState();
  //   useEffect(() => {
  //     setNewLoc(curentIndex);
  //   }, [curentIndex]);

  return (
    <div>
      {resources.map((resource, index) => {
        const isActive = location.includes(resource.name);

        return (
          <NavitemLink
            key={resource.name}
            to={`/${resource.name}`}
            title={(resource.options && resource.options.label) || resource.name}
            iconSrc={resource.icon}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            isActive={isActive}
            ref={ref}
          />
        );
      })}

      <NavIndicator index={curentIndex} />
      {isXSmall && logout}
    </div>
  );
};

export default withRouter(Menu);
