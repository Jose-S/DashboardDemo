import React, { useCallback, Fragment } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import {
  List as ListRA,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from "react-admin";

import DrawerMaterial from "@material-ui/core/Drawer";

import { PostList } from "./PostList";
import NavItemLink from "../Nav/NavItemLink";
import styled, { css } from "styled-components/macro";
import tw from "tailwind.macro";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "../Nav/AppBar";

const Drawer = styled(DrawerMaterial)`
  &.MuiDrawer-root {
    width: 72px;
  }
`;

const List = styled(ListRA)`
  background: white;
  padding: 16px;
`;

const MainContent = styled.div`
  padding: 48px;
  padding-top: 8px;
  flex-grow: 1;
`;

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
  console.log(history);
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
            <MainContent>
              <AppBar title="Posts" />
              <Grid container spacing={6} style={{ paddingTop: "48px" }}>
                <Grid container item xs={12} spacing={6}>
                  <Grid item xs={12} md={3}>
                    <Paper style={{ height: "252px" }}></Paper>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Paper style={{ height: "252px" }}></Paper>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Paper style={{ height: "252px" }}></Paper>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <List {...props}>
                    <PostList selectedRow={isMatch && parseInt(match.params.id, 10)} />
                  </List>
                </Grid>
              </Grid>
            </MainContent>

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
