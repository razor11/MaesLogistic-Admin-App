import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Edit,
  SimpleForm,
  TextInput,
  EditButton,
  Show,
  ListButton,
  ShowButton,
  SimpleShowLayout,
  TopToolbar,
  Create,
} from "react-admin";
import { Button } from "@material-ui/core";

export const UserList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);

const UserCreateActions = ({basePath, data, resource}: any) => ( 
    <TopToolbar>
          <ListButton basePath={basePath} label="Users" />
    </TopToolbar>
)

const UsersShowActions = ({ basePath, data, resource }: any) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Users" />
    <EditButton basePath={basePath} record={data} />
  </TopToolbar>
);

export const ShowUser = (props: any) => {
  const PostTitle = ({ record }: any) => {
    return <span>User {record ? `"${record.username}"` : ""}</span>;
  };
  return (
    <Show actions={<UsersShowActions />} title={<PostTitle />} {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="address.street" />
        <TextField source="phone" />
      </SimpleShowLayout>
    </Show>
  );
};

export const UserCreate = (props: any) => (
  <Create  actions={<UserCreateActions />} {...props}> 
    <SimpleForm>
      <TextInput source="id"></TextInput>
      <TextInput source="name"></TextInput>
      <TextInput source="username"></TextInput>
      <TextInput source="email"></TextInput>
    </SimpleForm>
  </Create>
);

export const UserEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id"></TextInput>
      <TextInput source="name"></TextInput>
      <TextInput source="username"></TextInput>
      <TextInput source="email"></TextInput>
      <Button color="primary">Back</Button>
    </SimpleForm>
  </Edit>
);
