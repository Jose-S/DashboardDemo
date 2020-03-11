import React, { useState } from "react";

import DrawerMaterial from "@material-ui/core/Drawer";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import PostQuickView from "./PostQuickView";

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

const PostDrawer = ({ isOpenMatch, selected, handleClose, ...props }) => {
  const [isOpen, setIsOpen] = useState(isOpenMatch);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
    handleClose();
  };

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
            <button onClick={handleDrawerClose}>close</button>
            <PostQuickView id={selected} onCancel={handleClose} {...props} />
          </div>
        ) : (
          <div>
            <button onClick={handleDrawerClose}>close</button>
          </div>
        )
      ) : (
        <div>
          <button onClick={handleDrawerOpen}>open</button>
        </div>
      )}
    </Drawer>
  );
};

export default PostDrawer;
