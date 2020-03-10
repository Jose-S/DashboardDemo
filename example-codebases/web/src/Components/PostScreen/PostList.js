import React from "react";
import { ShowButton, Datagrid, ReferenceField, TextField, EditButton } from "react-admin";

// import "../App.css";

export const PostList = ({ selectedRow, ...props }) => {
  return (
    <Datagrid rowClick="show" {...props}>
      <TextField source="id" />
      <ReferenceField label="User" source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      {/* <EditButton /> */}
      {/* <ShowButton /> */}
    </Datagrid>
  );
};
