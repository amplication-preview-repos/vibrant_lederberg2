import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AppointmentWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  member?: MemberWhereUniqueInput;
  service?: StringNullableFilter;
  timeSlot?: StringNullableFilter;
  trainer?: StringNullableFilter;
};
