// in src/MyLayout.js
import React, { useEffect } from "react";
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
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const MyAppBar = props => (
  <AppBar {...props}>
    <Toolbar>
      <Typography variant="h6" id="react-admin-title" />
    </Toolbar>
  </AppBar>
);

const useSidebarStyles = makeStyles({
  drawerPaper: {
    backgroundColor: "white",
    width: "96px",
    height: "100%"
  }
});

const MySidebar = props => {
  const classes = useSidebarStyles();
  return <Sidebar classes={classes} {...props} />;
};
const DashboardLayout = props => {
  console.log(props);
  return (
    <Layout
      {...props}
      appBar={MyAppBar}
      sidebar={MySidebar}
      menu={Menu}
      notification={Notification}
    />
  );
};

export default DashboardLayout;
