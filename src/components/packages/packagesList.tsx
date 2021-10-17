import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  SimpleList,
  FunctionField,
} from "react-admin";
import { useMediaQuery } from "@material-ui/core";

export const PackagesList = (props: any) => {
  const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.description}
          secondaryText={(record) =>   `${record.weigth} ${record.weightUnits}`}
          tertiaryText={(record) => `${record.large} L,   ${record.Heigth} H,
          ${record.width} W`}
        >
          <TextField source="id"></TextField>
          <TextField source="description" label="First Name"></TextField>
          <FunctionField
            label="weigth"
            render={(record: any): string =>
              `${record.weigth} ${record.weightUnits}`
            }
          />
          <FunctionField
            label="Volumen"
            render={(record: any): string =>
              `${record.units} ${record.volumen}`
            }
          />
          <FunctionField
            label="Dimensions"
            render={(
              record: any
            ): string => `${record.large} L,   ${record.heigth} H,
          ${record.width} W`}
          />

          <ShowButton />
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid>
          <TextField source="id"></TextField>
          <TextField source="description" label="Description"></TextField>
          <FunctionField
            label="weigth"
            render={(record: any): string =>
              `${record.weigth} ${record.weightUnits}`
            }
          />
          <FunctionField
            label="Volumen"
            render={(record: any): string =>
              `${record.units} ${record.volumen}`
            }
          />
          <FunctionField
            label="Dimensions"
            render={(
              record: any
            ): string => `${record.large} L,   ${record.heigth} H,
          ${record.width} W`}
          />

          <ShowButton />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
