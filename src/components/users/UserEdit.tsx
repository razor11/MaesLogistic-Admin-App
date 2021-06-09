import * as React from "react";
import {
  Edit,
  TextInput,
  NumberInput,
  PasswordInput,
  TopToolbar,
  ListButton,
  ShowButton,
  SimpleForm
} from "react-admin";


const PageTitle = ({ record }:any) : any => {
    return <span>Edit User: {record ? `"${record.UserName}"` : ''}</span>;
  };


const UserEditActions = ({ basePath, data, resource }: any): any => (
    <TopToolbar>
      <ListButton basePath={basePath} label="Users List" />
      <ShowButton basePath={basePath} record={data}/>
    </TopToolbar>
  );



export const UserEdit = (props: any) : any => (

    <Edit title={<PageTitle/>} actions={<UserEditActions/>} {...props}>
        <SimpleForm>
            <NumberInput source="id" disabled label="User Id"/>
            <TextInput source="FirstName" label="First Name"/>
            <TextInput source="LastName" label="First Name"/>
            <TextInput source="UserName" label="User Name"/>
            <TextInput source="Email" label="Email"/>
            <PasswordInput  source="Password" label="Password"/>
        </SimpleForm>
    </Edit>
)