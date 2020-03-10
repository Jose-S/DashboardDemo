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

import styled from "styled-components/macro";
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

const ResourceTemplate = ({
  title,
  childContent,
  childDrawer,
  mainRoute,
  queryRoute,
  props
}) => {
  const history = useHistory();
  const handleClose = useCallback(() => {
    history.push(mainRoute);
  }, [history]);

  return (
    <Route path={queryRoute}>
      {({ match }) => {
        // Double negative
        const isMatch = !!(match && match.params && match.params.id !== "create");

        return (
          <Fragment>
            <MainContent>
              <AppBar title={title} />
              {React.cloneElement(childContent, {
                selected: isMatch && parseInt(match.params.id, 10),
                props
              })}
            </MainContent>

            {/* {console.log("Match", match.params.id)} */}
            {React.cloneElement(childDrawer, {
              isOpen: isMatch,
              selected: match,
              onClose: handleClose,
              ...props
            })}
          </Fragment>
        );
      }}
    </Route>
  );
};

export default ResourceTemplate;
