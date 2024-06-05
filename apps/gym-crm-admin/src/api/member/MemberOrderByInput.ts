import { SortOrder } from "../../util/SortOrder";

export type MemberOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  membershipId?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
