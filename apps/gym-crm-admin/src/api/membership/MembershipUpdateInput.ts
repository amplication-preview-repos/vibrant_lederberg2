import { MemberUpdateManyWithoutMembershipsInput } from "./MemberUpdateManyWithoutMembershipsInput";

export type MembershipUpdateInput = {
  duration?: number | null;
  endDate?: Date | null;
  members?: MemberUpdateManyWithoutMembershipsInput;
  price?: number | null;
  startDate?: Date | null;
  typeField?: string | null;
};
