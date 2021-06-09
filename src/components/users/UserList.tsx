import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  SimpleList,
  EmailField,
  FunctionField
} from "react-admin";
import { useMediaQuery } from "@material-ui/core";

export const UsersList = (props: any) => {
  const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.FirstName}
          secondaryText={(record) => `${record.LastName}`}
          tertiaryText={(record) => record.UserName}
        >
          <TextField source="id"></TextField>
          <TextField source="FirstName" label="First Name"></TextField>
          <TextField source="LastName" label="Last Name"></TextField>
          <TextField source="UserName" label="User Name"></TextField>
          <EmailField source="Email" label="Email"></EmailField>
          <ShowButton />
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid>
          <TextField source="id"></TextField>
          <FunctionField  label="Name" render={ (record: any):string =>  `${record.FirstName} 
          ${record.LastName}` }/>
          <TextField source="UserName" label="User Name"></TextField>
          <EmailField source="Email" label="Email"></EmailField>
          <ShowButton />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
