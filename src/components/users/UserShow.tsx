import * as React from "react";
import {
  TopToolbar,
  SimpleShowLayout,
  EditButton,
  ListButton,
  NumberField,
  Show,
  TextField,
} from "react-admin";


const PageTitle = ({ record }:any) : any => {
    return <span>User: {record ? `"${record.UserName}"` : ''}</span>;
  };

  const UserActions = ({ basePath, data, resource }: any) : any => (
    <TopToolbar>
      <ListButton basePath={basePath} label="Users List" />
      <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
  );


export const UserShow = (props : any) : any => {

    return(
        <Show title={<PageTitle/>} actions={<UserActions/>} {...props}>
        <SimpleShowLayout>
                <NumberField  source="id" label="User Id"/>
                <TextField source="FirstName" label="First Name"></TextField>
                <TextField source="LastName" label="Last Name"></TextField>
                <TextField source="UserName" label="User Name"></TextField>
                <TextField source="Email" label="Email"></TextField>
        </SimpleShowLayout>

    </Show>
    )

}