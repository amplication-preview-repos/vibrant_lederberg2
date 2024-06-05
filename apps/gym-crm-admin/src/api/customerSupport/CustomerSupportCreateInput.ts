import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type CustomerSupportCreateInput = {
  issue?: string | null;
  member?: MemberWhereUniqueInput | null;
  resolution?: string | null;
  status?: "Option1" | null;
};
