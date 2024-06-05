import { SortOrder } from "../../util/SortOrder";

export type MembershipOrderByInput = {
  createdAt?: SortOrder;
  duration?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  startDate?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
