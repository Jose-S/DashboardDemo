import React, { useRef } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import styled, { css } from "styled-components/macro";
import tw from "tailwind.macro";
import Icon from "../Basic/Icon";
import Box from "@material-ui/core/Box";
import Tooltip from "../Basic/Tooltip";

const Signifier = styled(Box)`
  height: inherit;
  ${tw`w-1 bg-primary flex-grow-0`}
`;

const IconItem = styled(ListItemIcon)`
  flex-grow: 1;
  ${tw`flex justify-center`}
`;

const Item = styled(ListItem)`
  ${tw`w-24 h-24 p-0`}
`;

function Navitem({ title, iconSrc }) {
  return (
    <Tooltip title={title}>
      <Item button alignItems={"center"}>
        <IconItem>
          <Icon src={iconSrc} size={"large"} />
        </IconItem>
        <Signifier active="true" />
        {/* <ListItemText primary={title} /> */}
      </Item>
    </Tooltip>
  );
}

export default Navitem;
