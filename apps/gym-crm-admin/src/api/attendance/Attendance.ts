import { Member } from "../member/Member";

export type Attendance = {
  checkInTime: Date | null;
  checkOutTime: Date | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  member?: Member | null;
  updatedAt: Date;
};
