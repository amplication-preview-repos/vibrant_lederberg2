import { SortOrder } from "../../util/SortOrder";

export type CustomerSupportOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  issue?: SortOrder;
  memberId?: SortOrder;
  resolution?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
