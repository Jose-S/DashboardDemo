import React, { useRef } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import styled, { css } from "styled-components/macro";
import tw from "tailwind.macro";
import Icon from "../Basic/Icon";
import Box from "@material-ui/core/Box";
import Tooltip from "../Basic/Tooltip";
import { MenuItemLink } from "react-admin";

const Signifier = styled(Box)`
  height: inherit;
  ${tw`w-1 bg-primary flex-grow-0`}
`;

const IconItem = styled(ListItemIcon)`
  flex-grow: 1;
  ${tw`flex justify-center`}
`;

const Item = styled(({ className, ...props }) => (
  <MenuItemLink {...props} classes={{ root: className }} />
))`
  ${tw`w-24 h-24 p-0`}

  .MuiListItemIcon-root {
    flex-grow: 1;
    ${tw`flex justify-center`}
  }
`;

function NavitemLink({ to, title, iconSrc, onClick, isOpen, ...props }) {
  const renderItem = () => {
    return (
      <Item
        to={to}
        primaryText={title}
        leftIcon={iconSrc && <Icon src={iconSrc} size={"large"} />}
        onClick={onClick}
        sidebarIsOpen={isOpen}
      ></Item>
    );
  };

  return (
    <Tooltip title={"TEST"}>
      <Item
        to={to}
        primaryText={title}
        leftIcon={iconSrc && <Icon src={iconSrc} size={"large"} />}
        onClick={onClick}
        sidebarIsOpen={true}
      ></Item>
    </Tooltip>
  );
}

export default NavitemLink;
