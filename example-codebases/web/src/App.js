import React, { useContext, useState, useEffect } from "react";
import { Diez, DesignLanguage } from "diez-dashboard";
import "./App.css";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import ComentIcon from "@material-ui/icons/Comment";

import { Admin, Resource, ListGuesser, Logout } from "react-admin";
import { PostList, PostEdit, PostCreate, PostShow } from "./Components/posts";
import { UserList } from "./Components/users";
import Dashboard from "./Layout/Dashboard";
import DashboardLayout from "./Layout/DashboardLayout";
import authProvider from "./Business/authProvider";
import jsonServerProvider from "ra-data-json-server";

import selectTheme from "./themes/selected-theme";
import { ThemeProvider, ThemeConsumer } from "styled-components";
import PostScreen from "./Components/PostScreen/PostResource";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");

function themeSwitch(theme) {
  console.log(theme);
  var d = document.documentElement;

  if (theme === "dark") {
    d.classList.add("theme-dark");
  } else {
    d.classList.remove("theme-dark");
  }
}

const App = () => {
  const [ds, setDs] = useState();
  const diez = new Diez(DesignLanguage);
  const [theme, setTheme] = useState("ligth");

  useEffect(() => {
    // Here we are observing hot updates to our design language.
    //
    // Since this instance of Diez was initialized with DesignLanguage, it will deliver updates to the DesignLanguage
    // object described in `src/DesignLanguage.ts` (relative to the root of the Diez project).
    diez.attach(setDs);
  }, []);

  if (typeof ds === "undefined") {
    return null;
  }

  themeSwitch(theme);

  return (
    <ThemeProvider theme={selectTheme(ds, theme)}>
      <ThemeConsumer>
        {theme => (
          <Admin
            layout={DashboardLayout}
            dataProvider={dataProvider}
            authProvider={authProvider}
            dashboard={Dashboard}
            theme={theme}
          >
            <Resource
              name="Posts"
              icon={PostIcon}
              list={PostScreen}
              //   edit={PostEdit}
              //   create={PostCreate}
              //   show={PostShow}
            />
            <Resource name="Users" icon={UserIcon} list={UserList} />
            <Resource name="Comments" icon={ComentIcon} list={ListGuesser} />
          </Admin>
        )}
      </ThemeConsumer>
    </ThemeProvider>
  );
};

export default App;
