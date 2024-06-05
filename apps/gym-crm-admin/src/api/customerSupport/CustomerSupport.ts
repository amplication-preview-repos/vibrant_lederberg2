import { Member } from "../member/Member";

export type CustomerSupport = {
  createdAt: Date;
  id: string;
  issue: string | null;
  member?: Member | null;
  resolution: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
