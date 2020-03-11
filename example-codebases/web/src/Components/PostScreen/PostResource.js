import React, { useCallback, Fragment } from "react";
import { Route, useHistory } from "react-router-dom";

import styled from "styled-components/macro";
import tw from "tailwind.macro";

import AppBar from "../Nav/AppBar";
import PostContentGrid from "./PostContentGrid";
import PostDrawer from "./PostDrawer";
import { useDispatch, useSelector } from "react-redux";
import { setPostSideBar } from "../../redux/actions";

const MainContent = styled.div`
  ${tw`p-12 pt-2 `}
  flex-grow: 1;
`;

const PostScreen = props => {
  console.log("RESOURCE", props);
  const history = useHistory();

  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    history.push("/posts");
    dispatch(setPostSideBar({ isOpen: false }));
  }, [history]);

  const handleOpen = useCallback(() => {
    dispatch(setPostSideBar({ isOpen: true }));
  }, []);

  return (
    <Route path="/posts/:id">
      {({ match }) => {
        // Double negative

        const isMatch = !!(match && match.params && match.params.id !== "create");
        dispatch(setPostSideBar({ isOpen: isMatch }));

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
              handleOpen={handleOpen}
              {...props}
            />
          </Fragment>
        );
      }}
    </Route>
  );
};

export default PostScreen;
