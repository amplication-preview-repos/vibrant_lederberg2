import { Membership as TMembership } from "../api/membership/Membership";

export const MEMBERSHIP_TITLE_FIELD = "typeField";

export const MembershipTitle = (record: TMembership): string => {
  return record.typeField?.toString() || String(record.id);
};
