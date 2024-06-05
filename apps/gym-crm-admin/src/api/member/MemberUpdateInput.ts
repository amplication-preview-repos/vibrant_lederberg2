import { AppointmentUpdateManyWithoutMembersInput } from "./AppointmentUpdateManyWithoutMembersInput";
import { AttendanceUpdateManyWithoutMembersInput } from "./AttendanceUpdateManyWithoutMembersInput";
import { CustomerSupportUpdateManyWithoutMembersInput } from "./CustomerSupportUpdateManyWithoutMembersInput";
import { MembershipWhereUniqueInput } from "../membership/MembershipWhereUniqueInput";

export type MemberUpdateInput = {
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutMembersInput;
  attendances?: AttendanceUpdateManyWithoutMembersInput;
  customerSupports?: CustomerSupportUpdateManyWithoutMembersInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  membership?: MembershipWhereUniqueInput | null;
  phone?: string | null;
};
