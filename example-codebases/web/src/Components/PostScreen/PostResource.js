import React, { useCallback, Fragment } from "react";
import { Route, useHistory } from "react-router-dom";

import styled from "styled-components/macro";
import tw from "tailwind.macro";

import AppBar from "../Nav/AppBar";
import PostContentGrid from "./PostContentGrid";
import PostDrawer from "./PostDrawer";

const MainContent = styled.div`
  ${tw`p-12 pt-2 `}
  flex-grow: 1;
`;

const PostScreen = props => {
  const history = useHistory();

  const handleClose = useCallback(() => {
    history.push("/Posts");
  }, [history]);

  return (
    <Route path="/Posts/:id">
      {({ match }) => {
        // Double negative
        const isMatch = !!(match && match.params && match.params.id !== "create");
        return (
          <Fragment>
            <MainContent>
              <AppBar title="Posts" />
              <PostContentGrid selected={isMatch && parseInt(match.params.id, 10)} {...props} />
            </MainContent>

            <PostDrawer
              isOpenMatch={isMatch}
              id={isMatch ? match.params.id : 0}
              handleClose={handleClose}
              {...props}
            />
          </Fragment>
        );
      }}
    </Route>
  );
};

export default PostScreen;
