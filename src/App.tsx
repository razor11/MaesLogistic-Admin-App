import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import "./App.css";

import { Dashboard } from "./Dashboard";

//Components
import { DriversList } from "./components/drivers/DriverList";
import { DriverEdit } from "./components/drivers/DriverUpdate";
import { DriverCreate } from "./components/drivers/DriverCreate";
import { DriverShow } from "./components/drivers/DriverShow";

import { UsersList } from "./components/users/UserList";
import { UserShow } from "./components/users/UserShow";
import { UserEdit } from "./components/users/UserEdit";
import { UserCreate } from "./components/users/UserCreate";

import { ClientList } from "./components/clients/ClientList";
import { ClientShow } from "./components/clients/ClientShow";
import { ClientEdit } from "./components/clients/ClientEdit";
import { ClientCreate } from "./components/clients/ClientCreate";

////

import { authProvider } from "./providers/authProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import MyLayout from "./layout/MyLayout";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import UserIcon from "@material-ui/icons/Group";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#006db7",
    },
    secondary: {
      main: "#003866",
    },
  },
});

const dataProvider = jsonServerProvider("https://my-app-sar.herokuapp.com");

function App() {
  return (
    <Admin
      layout={MyLayout}
      theme={theme}
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource
        name="drivers"
        options={{ label: "Drivers" }}
        list={DriversList}
        edit={DriverEdit}
        create={DriverCreate}
        show={DriverShow}
        icon={SupervisedUserCircleIcon}
      ></Resource>
      <Resource
        name="users"
        options={{ label: "Users" }}
        list={UsersList}
        show={UserShow}
        edit={UserEdit}
        icon={UserIcon}
        create={UserCreate}
      />
      <Resource
        name="clients"
        options={{ label: "Clients" }}
        icon={PermContactCalendarIcon}
        list={ClientList}
        show={ClientShow}
        edit={ClientEdit}
        create={ClientCreate}
      />

      {/*  <Resource name="users" list={UserList} show={ShowUser} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
   <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} /> */}
    </Admin>
  );
}

export default App;
