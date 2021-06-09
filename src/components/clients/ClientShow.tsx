import * as React from "react";
import {
  TopToolbar,
  SimpleShowLayout,
  EditButton,
  ListButton,
  NumberField,
  Show,
  TextField,
  FunctionField 
} from "react-admin";


const PageTitle = ({ record }:any) : any => {
    return <span>User: {record ? `"${record.UserName}"` : ''}</span>;
  };

  const UserActions = ({ basePath, data, resource }: any) : any => (
    <TopToolbar>
      <ListButton basePath={basePath} label="Clients List" />
      <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
  );


export const ClientShow = (props : any) : any => {

    return(
        <Show title={<PageTitle/>} actions={<UserActions/>} {...props}>
        <SimpleShowLayout>
                <NumberField  source="id" label="User Id"/>
                <FunctionField label="Name" render = {(record: any):string => `${record.firstName}
                ${record.middleName} ${record.lastName}`} />
                <TextField source="userName" label="User Name"></TextField>
                <TextField source="email" label="Email"></TextField>
                <FunctionField label="Address" render = {(record: any):string => `${record.address.street}
                ${record.address.suite}`}/>
                <TextField source="address.city" label="City"/>
                <TextField source="address.state" label="State"/>
                <TextField source="address.country" label="Country"/>
                <TextField source="telephone" label="Telephone"/>
                <TextField source="companyName" label="Company"/>

        </SimpleShowLayout>

    </Show>
    )

}