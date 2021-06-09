import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  SimpleList,
  NumberField,
  EmailField,
  FunctionField,  
} from "react-admin";
import { useMediaQuery } from "@material-ui/core";



export const ClientList = (props: any) :any =>{
    const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
    return(
        <List {...props}>
            {isSmall ? (
                    <SimpleList
                    primaryText={(record) => record.firstName}
                    secondaryText={(record) => `${record.lastName}`}
                    tertiaryText={(record) => record.userName}
                    >
                    <NumberField source="id"></NumberField>
                    <FunctionField label="Name" render={ (record: any) : string => `${record.firstName} ${record.middleName}
                    ${record.lastName}`}></FunctionField>
                    <TextField source="userName" label="User Name"></TextField>
                    <EmailField source="email" label="Email"></EmailField>
                    <FunctionField source="address" label="Address" render={ (record: any) : string => `${record.address.street} 
                    ${record.address.suite} ${record.address.city}`}/>
                    <TextField source="telephone" label="Tel"/>
                    <ShowButton />
                    <EditButton />
                    </SimpleList>
                ) : (
                    <Datagrid>
                     <NumberField source="id"></NumberField>
                    <FunctionField label="Name" render={ (record: any) : string => `${record.firstName} ${record.middleName}
                    ${record.lastName}`}></FunctionField>
                    <TextField source="userName" label="User Name"></TextField>
                    <EmailField source="email" label="Email"></EmailField>
                    <FunctionField source="address" label="Address" render={ (record: any) : string => `${record.address.street} 
                    ${record.address.suite} ${record.address.city}`}/>
                    <TextField source="telephone" label="Tel"/>
                    <ShowButton />
                    <EditButton />
                    </Datagrid>
                )}

        </List>


    )
}