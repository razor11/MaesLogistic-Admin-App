import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  SimpleList,
  FunctionField,
  Filter,
  TextInput
} from "react-admin";
import { useMediaQuery } from "@material-ui/core";



const DriversFilter = (props:any) :any => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <TextInput label="Driver Name" source="driverName" defaultValue="" />
  </Filter>
);



export const DriversList = (props: any) => {
  const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
  return (
    <List {...props} filters={<DriversFilter/>}>
      { isSmall ? (
        <SimpleList primaryText={record => record.driverName}
        secondaryText={record => `${record.driverLastName}`}
        tertiaryText={record => record.driverSSN}
        >
          <TextField source="id"></TextField>
          <FunctionField label="Name" render= { ( record:any): string => `${record.driverName} ${record.driverLastName}`}/>
          <TextField source="driverSSN" label="SSN"></TextField>
          <TextField source="driverAge" label="age"></TextField>
          <ShowButton />
          <EditButton />
        
        </SimpleList>
      ) : (
        <Datagrid>
          <TextField source="id"></TextField>
          <FunctionField label="Name" render= { ( record:any): string => `${record.driverName} ${record.driverLastName}`}/>
          <TextField source="driverAge" label="Age"></TextField>
          <TextField source="driverSSN" label="SSN"></TextField>
          <ShowButton />
          <EditButton />
          
        </Datagrid>
      )}
    </List>
  );
};
