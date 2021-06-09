import * as React from "react";
import {
  required,
  Create,
  TopToolbar,
  TextInput,
  ListButton,
  PasswordInput,
  NumberInput,
  SimpleForm,
  ShowButton
} from "react-admin";





const UserCreateActions =  ({ basePath, data, resource }: any): any => (
    <TopToolbar>
      <ListButton basePath={basePath} label="Users List" />
      <ShowButton basePath={basePath} record={data}/>
    </TopToolbar>
  );



export const UserCreate = (props : any) :any => (
    <Create  actions={<UserCreateActions/>} {...props}>
        <SimpleForm  redirect="show">
            <NumberInput source="id"  label="User Id"/>
            <TextInput source="FirstName"  validate={[required()]} label="First Name"/>
            <TextInput source="LastName"  validate={[required()]} label="Last Name"/>
            <TextInput source="UserName"  validate={[required()]} label="User Name"/>
            <TextInput source="Email"  validate={[required()]} label="Email"/>
            <PasswordInput  source="Password"  validate={[required()]} label="Password"/>
        </SimpleForm>

    </Create>
)