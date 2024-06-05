import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type CustomerSupportUpdateInput = {
  issue?: string | null;
  member?: MemberWhereUniqueInput | null;
  resolution?: string | null;
  status?: "Option1" | null;
};
