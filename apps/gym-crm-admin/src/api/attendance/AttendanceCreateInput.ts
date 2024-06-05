import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type AttendanceCreateInput = {
  checkInTime?: Date | null;
  checkOutTime?: Date | null;
  date?: Date | null;
  member?: MemberWhereUniqueInput | null;
};
