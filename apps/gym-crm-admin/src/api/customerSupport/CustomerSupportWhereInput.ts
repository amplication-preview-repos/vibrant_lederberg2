import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type CustomerSupportWhereInput = {
  id?: StringFilter;
  issue?: StringNullableFilter;
  member?: MemberWhereUniqueInput;
  resolution?: StringNullableFilter;
  status?: "Option1";
};
