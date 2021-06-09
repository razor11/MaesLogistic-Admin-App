import * as React from "react";
import {
  TopToolbar,
  TabbedShowLayout,
  Tab,
  EditButton,
  ListButton,
  NumberField,
  Show,
  DateField,
  ChipField,  
  TextField
} from "react-admin";




const PageTitle = ({ record }:any) : any => {
  return <span>Driver: {record ? `"${record.driverName}"` : ''}</span>;
};


const DriverShowActions = ({ basePath, data, resource }: any) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Drivers List" />
    <EditButton basePath={basePath} record={data}/>
  </TopToolbar>
);

 export const DriverShow = (props : any) => {
     return(
       <Show title={<PageTitle/>} actions={<DriverShowActions/>} {...props}>
           <TabbedShowLayout>
               <Tab label="Identity">
                   <NumberField  source="id" label="Driver Id"/>
                   <TextField source="driverName" label="Driver Name"/>  
                   <TextField source="driverLastName" label="Driver Last Name "/> 
                   <TextField source="driverSSN" label ="SSN"/>
                   <DateField source="dateOfBirth" label="Date of Birth"/>
                   <NumberField source="driverAge" label="Age"/>
                   <ChipField  source="gender" label="Gender"/>

               </Tab>

               <Tab label="Address">
                  <TextField source="address.street" label="Street"/>
                  <TextField source="address.suite" label="Suite"/>
                  <TextField source="address.city" label="City"/>
                  <TextField source="address.zipcode" label="Zipcode"/>
                  <TextField source="address.country" label="Country"/>


               </Tab>

               <Tab label="Driver Record">
                <NumberField source="packagesCompleted" label="Packages Delivered"></NumberField>
                <NumberField source="tripsCompleted" label="Trips Completed"></NumberField>
                <NumberField source="milesAccuered" label="Miles Accuered"></NumberField>
                <NumberField source="accidentsReports" label="Accidents Reports"></NumberField>
                <NumberField source="incidentsReports" label="Incidents Reports"></NumberField>

               </Tab>

           </TabbedShowLayout>

       </Show>
     )
 }
