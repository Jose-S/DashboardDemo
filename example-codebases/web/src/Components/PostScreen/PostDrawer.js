import React, { useState, useEffect } from "react";

import DrawerMaterial from "@material-ui/core/Drawer";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import PostQuickView from "./PostQuickView";
import { useSelector } from "react-redux";
import PostFilter from "./PostFilter";

const Drawer = styled(DrawerMaterial)`

transition: ${props =>
  props.open
    ? props.theme.transitions.create("width", {
        easing: props.theme.transitions.easing.sharp,
        duration: props.theme.transitions.duration.enteringScreen
      })
    : props.theme.transitions.create("width", {
        easing: props.theme.transitions.easing.sharp,
        duration: props.theme.transitions.duration.leavingScreen
      })};

  &.MuiDrawer-root {
    ${props => (props.open ? tw`w-99` : tw`w-18`)}
  }

  .MuiDrawer-paper {
    width: inherit;
    /* ${props => (props.open ? tw`w-28` : tw`w-18`)} */
  }
`;

const PostDrawer = ({ isOpenMatch, selected, handleClose, handleOpen, ...props }) => {
  const isOpen = useSelector(state => state.postSiderbarOpen);

  return (
    <Drawer
      variant="permanent"
      open={isOpen || isOpenMatch}
      anchor="right"
      onClose={handleClose}
    >
      {/* Avoid route errors*/}
      {isOpen || isOpenMatch ? (
        isOpenMatch ? (
          <div>
            <button onClick={handleClose}>close</button>
            <PostQuickView id={selected} onCancel={handleClose} {...props} />
          </div>
        ) : (
          <div>
            <button onClick={handleClose}>close</button>
            <PostFilter />
          </div>
        )
      ) : (
        <div>
          <button onClick={handleOpen}>open</button>
        </div>
      )}
    </Drawer>
  );
};

export default PostDrawer;
