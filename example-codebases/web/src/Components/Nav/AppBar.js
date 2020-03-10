import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import LaunchIcon from "@material-ui/icons/Launch";
import AppBarMaterial from "@material-ui/core/AppBar";
import ToolbarMaterial from "@material-ui/core/Toolbar";
import RouterBreadcrumb from "../Basic/Breadcrumb";

const AppBarStyled = styled(AppBarMaterial)`
  ${tw`shadow-none h-24`}
`;

const Title = styled.p`
  ${tw`fontStyle-10 m-0 text-gray-700`}
`;

const Toolbar = styled(ToolbarMaterial)`
  top: 16px;
`;

const AppBar = ({ title, location, children, props }) => (
  <AppBarStyled color="transparent" position="relative" {...props}>
    <Toolbar disableGutters={true}>
      <div>
        <RouterBreadcrumb locTest={location} />
        <Title>{title}</Title>
      </div>
      {children}
    </Toolbar>
  </AppBarStyled>
);

export default AppBar;
