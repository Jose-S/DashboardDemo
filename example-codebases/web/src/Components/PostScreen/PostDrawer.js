import React from "react";

import DrawerMaterial from "@material-ui/core/Drawer";

import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

const PostEdit = props => (
  <Edit title={"QickView"} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput label="User" source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

const Drawer = styled(DrawerMaterial)`
  &.MuiDrawer-root {
    width: 72px;
  }
`;

const PostDrawer = props => {
  console.log("PROPS DRAWER", props.isOpen);
  return (
    <Drawer variant="permanent" open={props.isOpen} anchor="right" onClose={props.onClose}>
      {/* Avoid route errors*/}
      {props.isOpen ? (
        <PostEdit id={1} onCancel={props.onClose} {...props} />
      ) : (
        <div style={{ width: "72px" }} />
      )}
    </Drawer>
  );
};

export default PostDrawer;
