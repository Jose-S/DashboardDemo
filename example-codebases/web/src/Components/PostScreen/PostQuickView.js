import React from "react";

import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

const PostQuickView = props => (
  <Edit title={"QickView"} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      {/* <ReferenceInput label="User" source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput> */}
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export default PostQuickView;
