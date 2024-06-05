import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type AppointmentCreateInput = {
  date?: Date | null;
  member?: MemberWhereUniqueInput | null;
  service?: string | null;
  timeSlot?: string | null;
  trainer?: string | null;
};
