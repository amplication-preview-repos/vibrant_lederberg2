import { Member } from "../member/Member";

export type Appointment = {
  createdAt: Date;
  date: Date | null;
  id: string;
  member?: Member | null;
  service: string | null;
  timeSlot: string | null;
  trainer: string | null;
  updatedAt: Date;
};
