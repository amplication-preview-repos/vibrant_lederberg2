import { AppointmentCreateNestedManyWithoutMembersInput } from "./AppointmentCreateNestedManyWithoutMembersInput";
import { AttendanceCreateNestedManyWithoutMembersInput } from "./AttendanceCreateNestedManyWithoutMembersInput";
import { CustomerSupportCreateNestedManyWithoutMembersInput } from "./CustomerSupportCreateNestedManyWithoutMembersInput";
import { MembershipWhereUniqueInput } from "../membership/MembershipWhereUniqueInput";

export type MemberCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutMembersInput;
  attendances?: AttendanceCreateNestedManyWithoutMembersInput;
  customerSupports?: CustomerSupportCreateNestedManyWithoutMembersInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  membership?: MembershipWhereUniqueInput | null;
  phone?: string | null;
};
