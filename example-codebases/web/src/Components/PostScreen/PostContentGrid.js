/**
 *
 * This component determines the main layout of the Post Screen
 */

import React from "react";

import { List as ListRA } from "react-admin";
import { PostList } from "./PostList";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const List = styled(ListRA)`
  ${tw`p-4 bg-white `}
`;

const MainGrid = styled(Grid)`
  ${tw`pt-12 `}
`;

const PostContentGrid = ({ selected, ...props }) => {
  return (
    <MainGrid container spacing={6}>
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
          <PostList selectedRow={selected} />
        </List>
      </Grid>
    </MainGrid>
  );
};

export default PostContentGrid;
