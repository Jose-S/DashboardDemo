import React from "react";
import { ReferenceInput, SelectInput, TextInput, Filter } from "react-admin";
import { SharedFilterConsumer } from "./FilterContext";

const PostFilter = () => {
  return (
    <SharedFilterConsumer>
      {({ filterProps }) => (
        <Filter {...filterProps}>
          <TextInput label="Search" source="q" alwaysOn />
          <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
          </ReferenceInput>
        </Filter>
      )}
    </SharedFilterConsumer>
  );
};

export default PostFilter;
