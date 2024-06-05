import { Member } from "../member/Member";

export type Membership = {
  createdAt: Date;
  duration: number | null;
  endDate: Date | null;
  id: string;
  members?: Array<Member>;
  price: number | null;
  startDate: Date | null;
  typeField: string | null;
  updatedAt: Date;
};
