import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import './App.css';
import { UserList, UserEdit, UserCreate, ShowUser } from './users';
import { Dashboard } from './Dashboard'
import {PostList, PostEdit, PostCreate} from './Post'
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import RecentActorsIcon from '@material-ui/icons/RecentActors';

//Components
import {DriversList} from './components/drivers/DriverList'
import {DriverEdit} from './components/drivers/DriverUpdate'
import {DriverCreate} from './components/drivers/DriverCreate'
import {DriverShow} from './components/drivers/DriverShow'

////

import {authProvider}  from './providers/authProvider'
import { createMuiTheme } from '@material-ui/core/styles';
import MyLayout from './layout/MyLayout';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#006db7',
    },
    secondary: {
      main: '#003866',
    },
  },
});


const dataProvider = jsonServerProvider('https://my-app-sar.herokuapp.com');

function App() {
  return (

   <Admin layout={MyLayout} theme={theme} dashboard ={Dashboard} authProvider ={authProvider} dataProvider={dataProvider} >
     <Resource  name="drivers" options={{ label: 'Drivers' }} list={DriversList} edit={DriverEdit}
     create={DriverCreate} show={DriverShow} icon={RecentActorsIcon}></Resource>
  
  
  {/*  <Resource name="users" list={UserList} show={ShowUser} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
   <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} /> */}
   </Admin>
       
   
  );
}

export default App;
