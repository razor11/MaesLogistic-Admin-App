import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  SimpleList,
} from "react-admin";
import { useMediaQuery } from "@material-ui/core";

export const DriversList = (props: any) => {
  const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
  return (
    <List {...props}>
      { isSmall ? (
        <SimpleList primaryText={record => record.driverName}
        secondaryText={record => `${record.driverLastName}`}
        tertiaryText={record => new Date(record.driverSSN).toLocaleDateString()}
        >
          <TextField source="id"></TextField>
          <TextField source="driverName"></TextField>
          <TextField source="driverLastName"></TextField>
          <TextField source="driverSSN" label="Driver SSN"></TextField>
          <TextField source="driverAge"></TextField>
          <ShowButton />
          <EditButton />
        
        </SimpleList>
      ) : (
        <Datagrid>
          <TextField source="id"></TextField>
          <TextField source="driverName"></TextField>
          <TextField source="driverLastName"></TextField>
          <TextField source="driverSSN" label="Driver SSN"></TextField>
          <TextField source="driverAge"></TextField>
          <ShowButton />
          <EditButton />
          
        </Datagrid>
      )}
    </List>
  );
};
