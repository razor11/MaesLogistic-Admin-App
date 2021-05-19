import * as React from "react";
import {
  TopToolbar,
  TabbedForm,
  FormTab,
  required,
  Create,
  TextInput,
  SelectInput,
  ListButton,
  NumberInput,
  DateInput 
} from "react-admin";
import { Box } from "@material-ui/core";

const UserCreateActions = ({ basePath, data, resource }: any) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Drivers List" />
  </TopToolbar>
);

export const DriverCreate = (props: any) => (
  <Create actions={<UserCreateActions />} {...props}>
    <TabbedForm redirect="show" scrollButtons="auto">
      <FormTab label="Identity">
        <NumberInput source="id"></NumberInput>
        <TextInput
          source="driverName"
          label="Names"
          validate={[required()]}
        ></TextInput>
        <TextInput
          source="driverLastName"
          label="Last Names"
          validate={[required()]}
        ></TextInput>
        <NumberInput
          source="driverSSN"
          label="SSN"
          validate={[required()]}
        ></NumberInput>
        <DateInput source="dateOfBirth" label="Date of birth"></DateInput>
        <NumberInput
          source="driverAge"
          label="Age"
          validate={[required()]}
        ></NumberInput>
        <SelectInput
          source="gender"
          label="Gender"
          validate={[required()]}
          choices={[
            { id: "male", name: "Male" },
            { id: "female", name: "Female" },
          ]}
        />
      </FormTab>
      <FormTab label="Address">
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
  </Create>
);
