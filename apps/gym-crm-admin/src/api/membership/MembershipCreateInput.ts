import { MemberCreateNestedManyWithoutMembershipsInput } from "./MemberCreateNestedManyWithoutMembershipsInput";

export type MembershipCreateInput = {
  duration?: number | null;
  endDate?: Date | null;
  members?: MemberCreateNestedManyWithoutMembershipsInput;
  price?: number | null;
  startDate?: Date | null;
  typeField?: string | null;
};
