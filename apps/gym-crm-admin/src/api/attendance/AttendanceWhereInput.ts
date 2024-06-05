import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type AttendanceWhereInput = {
  checkInTime?: DateTimeNullableFilter;
  checkOutTime?: DateTimeNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  member?: MemberWhereUniqueInput;
};
