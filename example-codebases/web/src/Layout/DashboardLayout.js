// in src/MyLayout.js
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
// import { ThemeProvider } from "@material-ui/styles";
import {
  //   Menu,
  Notification,
  Sidebar,
  setSidebarVisibility,
  ComponentPropType,
  Layout
} from "react-admin";
import Menu from "./Menu";
import AppBar from "../Components/Nav/AppBar";

const MyAppBar = props => (
  <></>
  //   <AppBar {...props} />
  //     <Toolbar>
  //       <Typography variant="h6" id="react-admin-title" />
  //     </Toolbar>
  //   </AppBar>
);

const useSidebarStyles = makeStyles({
  drawerPaper: {
    backgroundColor: "white",
    height: "100%",
    width: "96px",
    marginTop: "0px",
    position: "fixed"
  }
});

const useLayoutStyles = makeStyles({
  appFrame: {
    marginTop: "0px",
    flexDirection: "row"
  },
  contentWithSidebar: {
    display: "flex",
    flexGrow: 1
  },
  content: {
    display: "flex",
    flexDirection: "row",
    padding: 0
  }
});

const MySidebar = props => {
  const classes = useSidebarStyles();
  return <Sidebar style={{ width: "96px" }} classes={classes} {...props} />;
};

const DashboardLayout = props => {
  return (
    <Layout
      {...props}
      appBar={MyAppBar}
      sidebar={MySidebar}
      menu={Menu}
      notification={Notification}
      classes={useLayoutStyles()}
    />
  );
};

export default DashboardLayout;
