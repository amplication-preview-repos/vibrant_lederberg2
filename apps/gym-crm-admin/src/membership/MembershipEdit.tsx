import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { MemberTitle } from "../member/MemberTitle";

export const MembershipEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Duration" source="duration" />
        <DateTimeInput label="EndDate" source="endDate" />
        <ReferenceArrayInput
          source="members"
          reference="Member"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MemberTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Price" source="price" />
        <DateTimeInput label="StartDate" source="startDate" />
        <TextInput label="Type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
