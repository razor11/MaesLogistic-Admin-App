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

const PageTitle = ({ record }: any): any => {
  return <span>Package: {record ? `"${record.description}"` : ""}</span>;
};

const PackageShowActions = ({ basePath, data, resource }: any) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Drivers List" />
    <EditButton basePath={basePath} record={data} />
  </TopToolbar>
);

export const PackageShow = (props: any) => {
  return (
    <Show title={<PageTitle />} actions={<PackageShowActions />} {...props}>
      <SimpleShowLayout>
        
          <NumberField source="id" label="Package Id" />
          <TextField source="description" label="description" />
          <FunctionField
            label="weigth"
            render={(record: any): string =>
              `${record.weigth} ${record.weightUnits}`
            }
          />

          <FunctionField
            label="Volumen"
            render={(record: any): string =>
              ` ${record.volumen} ${record.units}`
            }
          />
          <FunctionField
            label="Dimensions"
            render={(
              record: any
            ): string => `${record.large} L,   ${record.heigth} H,
          ${record.width} W`}
          />
    

       
      </SimpleShowLayout>
    </Show>
  );
};
