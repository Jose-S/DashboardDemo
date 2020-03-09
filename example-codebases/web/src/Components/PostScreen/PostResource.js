import React, { useCallback, Fragment } from "react";
import { Route, useHistory } from "react-router-dom";
import { List, Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

import Drawer from "@material-ui/core/Drawer";

import { PostList } from "./PostList";
import NavItemLink from "../Nav/NavItemLink";

const PostEdit = props => (
  <Edit title={"<PostTitle />"} {...props}>
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

const PostScreen = props => {
  const history = useHistory();

  const handleClose = useCallback(() => {
    history.push("/posts");
  }, [history]);

  return (
    <Route path="/posts/:id">
      {({ match }) => {
        // Double negative
        const isMatch = !!(match && match.params && match.params.id !== "create");

        return (
          <Fragment>
            <List {...props}>
              <PostList selectedRow={isMatch && parseInt(match.params.id, 10)} />
            </List>
            <Drawer variant="permanent" open={isMatch} anchor="right" onClose={handleClose}>
              {/* Avoid route errors*/}
              {isMatch ? (
                <PostEdit id={match.params.id} onCancel={handleClose} {...props} />
              ) : (
                <div style={{ width: "72px" }} />
              )}
            </Drawer>
          </Fragment>
        );
      }}
    </Route>
  );
};

export default PostScreen;
