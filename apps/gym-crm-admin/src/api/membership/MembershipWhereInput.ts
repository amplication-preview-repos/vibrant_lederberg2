import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MemberListRelationFilter } from "../member/MemberListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MembershipWhereInput = {
  duration?: IntNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  members?: MemberListRelationFilter;
  price?: FloatNullableFilter;
  startDate?: DateTimeNullableFilter;
  typeField?: StringNullableFilter;
};
