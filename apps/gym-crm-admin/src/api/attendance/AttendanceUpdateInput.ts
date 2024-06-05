import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type AttendanceUpdateInput = {
  checkInTime?: Date | null;
  checkOutTime?: Date | null;
  date?: Date | null;
  member?: MemberWhereUniqueInput | null;
};
