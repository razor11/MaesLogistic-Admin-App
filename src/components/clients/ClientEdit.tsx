import * as React from "react";
import {
  Edit,
  TextInput,
  NumberInput,
  PasswordInput,
  TopToolbar,
  ListButton,
  ShowButton,
  TabbedForm,
  SelectInput,
  FormTab,
  TabbedFormTabs,
  required,
} from "react-admin";

const PageTitle = ({ record }: any): any => {
  return <span>Edit Client: {record ? `"${record.userName}"` : ""}</span>;
};

const UserEditActions = ({ basePath, data, resource }: any): any => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Clients List" />
    <ShowButton basePath={basePath} record={data} />
  </TopToolbar>
);

export const ClientEdit = (props: any): any => (
  <Edit title={<PageTitle />} actions={<UserEditActions />} {...props}>
    <TabbedForm redirect="list" tabs={<TabbedFormTabs scrollButtons="auto" />}>
      <FormTab label="Identity">
        <NumberInput
          source="id"
          validate={[required()]}
          disabled
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
          label="First Name"
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
  </Edit>
);
