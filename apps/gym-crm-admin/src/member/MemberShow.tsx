import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MEMBER_TITLE_FIELD } from "./MemberTitle";
import { MEMBERSHIP_TITLE_FIELD } from "../membership/MembershipTitle";

export const MemberShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Appointment"
          target="memberId"
          label="Appointments"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Member"
              source="member.id"
              reference="Member"
            >
              <TextField source={MEMBER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Service" source="service" />
            <TextField label="TimeSlot" source="timeSlot" />
            <TextField label="Trainer" source="trainer" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Attendance"
          target="memberId"
          label="Attendances"
        >
          <Datagrid rowClick="show">
            <TextField label="CheckInTime" source="checkInTime" />
            <TextField label="CheckOutTime" source="checkOutTime" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Member"
              source="member.id"
              reference="Member"
            >
              <TextField source={MEMBER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CustomerSupport"
          target="memberId"
          label="CustomerSupports"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Issue" source="issue" />
            <ReferenceField
              label="Member"
              source="member.id"
              reference="Member"
            >
              <TextField source={MEMBER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Resolution" source="resolution" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
