import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { CustomerSupportListRelationFilter } from "../customerSupport/CustomerSupportListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MembershipWhereUniqueInput } from "../membership/MembershipWhereUniqueInput";

export type MemberWhereInput = {
  address?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  attendances?: AttendanceListRelationFilter;
  customerSupports?: CustomerSupportListRelationFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  membership?: MembershipWhereUniqueInput;
  phone?: StringNullableFilter;
};
