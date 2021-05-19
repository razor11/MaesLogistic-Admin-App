import * as React from "react";
import {
  TabbedForm,
  FormTab,
  ShowButton,
  Edit,
  required,
  DateInput,
  SelectInput,
  ListButton,
  TopToolbar,
  TextInput,
  NumberInput,
} from "react-admin";

import { Box } from "@material-ui/core";


const DriverUpdateActions = ({ basePath, data, resource }: any) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Drivers List" />
    <ShowButton basePath={basePath} record={data}/>
  </TopToolbar>
);


export const DriverEdit = (props: any) => (
  <Edit actions={<DriverUpdateActions/>} {...props}>
    <TabbedForm  redirect="list">
        <FormTab label="Driver Personal Information">
        <TextInput source="id" disabled></TextInput>
      <TextInput source="driverName"></TextInput>
      <TextInput source="driverLastName"></TextInput>
      <TextInput source="driverSSN" label="Driver SSN"></TextInput>
      <DateInput source="dateOfBirth" label="Date of birth"></DateInput>
      <NumberInput source="driverAge"></NumberInput>
      <SelectInput
        source="gender"
        label="Gender"
        choices={[
          { id: "male", name: "Male" },
          { id: "female", name: "Female" },
        ]}
      />
        </FormTab>
      
      <FormTab label="Driver Address">
      <TextInput
          source="address.street"
          label="Street"
          validate={[required()]}
        ></TextInput>
        <TextInput
          source="address.suite"
          label="Suite"
          validate={[required()]}
        ></TextInput>
        <TextInput
          source="address.city"
          label="City"
          validate={[required()]}
        ></TextInput>
        <TextInput
          source="address.zipcode"
          label="Zipcode"
          validate={[required()]}
        ></TextInput>
          <SelectInput
          source="address.country"
          label="Country"
          validate={[required()]}
          choices={[
            { id: "USA", name: "USA" },
            { id: "Honduras", name: "Honduras" },
            { id: "El Salvador", name: "El Salvador" },
          ]}
        />
        <label>Geolocation</label>
        <Box display="flex">
          <Box flex={2} mr="0.5em">
            <TextInput source="address.geo.lat" label="Latitud"></TextInput>
          </Box>
          <Box flex={2} ml="0.5em">
            <TextInput source="address.geo.lng" label="Length"></TextInput>
          </Box>
        </Box>

      </FormTab>

      <FormTab label="Driver Record">
           <NumberInput source="packagesCompleted" label="Packages Delivered"></NumberInput>
           <NumberInput source="tripsCompleted" label="Trips Completed"></NumberInput>
           <NumberInput source="milesAccuered" label="Miles Accuered"></NumberInput>
           <NumberInput source="accidentsReports" label="Accidents Reports"></NumberInput>
           <NumberInput source="incidentsReports" label="Incidents Reports"></NumberInput>
      </FormTab>
     
    </TabbedForm>
  </Edit>
);
