import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { MemberTitle } from "../member/MemberTitle";

export const AppointmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <ReferenceInput source="member.id" reference="Member" label="Member">
          <SelectInput optionText={MemberTitle} />
        </ReferenceInput>
        <TextInput label="Service" source="service" />
        <TextInput label="TimeSlot" source="timeSlot" />
        <TextInput label="Trainer" source="trainer" />
      </SimpleForm>
    </Edit>
  );
};
