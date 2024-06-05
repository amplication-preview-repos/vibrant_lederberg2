import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MEMBERSHIP_TITLE_FIELD } from "./MembershipTitle";

export const MembershipShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Duration" source="duration" />
        <TextField label="EndDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <TextField label="StartDate" source="startDate" />
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Member"
          target="membershipId"
          label="Members"
        >
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="DateOfBirth" source="dateOfBirth" />
            <TextField label="Email" source="email" />
            <TextField label="FirstName" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="LastName" source="lastName" />
            <ReferenceField
              label="Membership"
              source="membership.id"
              reference="Membership"
            >
              <TextField source={MEMBERSHIP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Phone" source="phone" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
