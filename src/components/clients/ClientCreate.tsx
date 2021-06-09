import * as React from "react";
import {
  required,
  Create,
  TopToolbar,
  TextInput,
  ListButton,
  PasswordInput,
  NumberInput,
  TabbedForm,
  TabbedFormTabs,
  FormTab,
  ShowButton,
  SelectInput,
} from "react-admin";

const UserCreateActions = ({ basePath, data, resource }: any): any => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Users List" />
    <ShowButton basePath={basePath} record={data} />
  </TopToolbar>
);

export const ClientCreate = (props: any): any => (
  <Create actions={<UserCreateActions />} {...props}>
    <TabbedForm redirect="list" tabs={<TabbedFormTabs scrollButtons="auto" />}>
      <FormTab label="Identity">
        <NumberInput
          source="id"
          validate={[required()]}
          label="Client Id"
        />
        <TextInput
          source="firstName"
          validate={[required()]}
          label="First Name"
        />
           <TextInput
          source="middleName"
          validate={[required()]}
          label="Middle Name"
        />
        <TextInput
          source="lastName"
          validate={[required()]}
          label="Last Name"
        />
        <TextInput
          source="userName"
          validate={[required()]}
          label="User Name"
        />

        <PasswordInput
          validate={[required()]}
          source="Password"
          label="Password"
        />
      </FormTab>

      <FormTab label="Contact">
        <TextInput source="email" validate={[required()]} label="Email" />
        <TextInput
          validate={[required()]}
          source="telephone"
          label="Telephone"
        />
        <TextInput source="company" label="Company" />
      </FormTab>

      <FormTab label="Address">
        <TextInput
          validate={[required()]}
          source="address.street"
          label="Street"
        />
        <TextInput
          validate={[required()]}
          source="address.suite"
          label="Suite"
        />
        <TextInput validate={[required()]} source="address.city" label="City" />
        <TextInput
          validate={[required()]}
          source="address.state"
          label="State"
        />
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
      </FormTab>
    </TabbedForm>
  </Create>
);
