import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@material-ui/core";
import { getResources } from "react-admin";
import { withRouter } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import styled, { css } from "styled-components/macro";
import tw from "tailwind.macro";

import NavitemLink from "../Components/Nav/NavItemLink";
import NavIndicator from "../Components/Nav/NavIndicator";
import Avatar from "../Components/Basic/Avatar";

const AvatarContainer = styled.div`
  ${tw`flex justify-center items-center w-24 h-24`}
`;
const Menu = ({ onMenuClick, logout, ...props }) => {
  const isXSmall = useMediaQuery(theme => theme.breakpoints.down("xs"));
  const location = props.location.pathname;
  const open = useSelector(state => state.admin.ui.sidebarOpen);
  const data = useSelector(state => state);

  const resources = useSelector(getResources);
  const ref = React.createRef();
  let flat = resources.reduce((total, val) => total.concat(val.name), []);

  const getCurrentIndex = () => {
    // TEMPORARY SOLUTION WILL FIND A BETTER ONE THAT RELOADS ONLY IF NEEDE
    let curentIndex = flat.indexOf(location.split("/")[1]);
    return curentIndex;
  };

  //   let flat = resources.reduce((total, val) => total.concat(val.name), []);
  //   let curentIndex = flat.indexOf(location.replace("/", ""));
  //   const [prevLoc, setNewLoc] = useState();
  //   useEffect(() => {
  //     setNewLoc(curentIndex);
  //   }, [curentIndex]);

  return (
    <div>
      <AvatarContainer>
        <Avatar firstName="Jose" lastName="Saravia" />
      </AvatarContainer>

      <Divider variant="middle" />

      <div style={{ position: "relative" }}>
        {resources.map((resource, index) => {
          const isActive = location.includes(resource.name);

          return (
            <NavitemLink
              key={resource.name}
              to={`/${resource.name}`}
              title={(resource.options && resource.options.label) || resource.name}
              iconSrc={resource.icon}
              onClick={onMenuClick}
              sidebarIsOpen={false}
              isActive={isActive}
              //   ref={ref}
            />
          );
        })}

        <NavIndicator index={getCurrentIndex()} />
      </div>
      {isXSmall && logout}
    </div>
  );
};

export default withRouter(Menu);
