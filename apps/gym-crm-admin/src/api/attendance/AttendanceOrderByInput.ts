import { SortOrder } from "../../util/SortOrder";

export type AttendanceOrderByInput = {
  checkInTime?: SortOrder;
  checkOutTime?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  memberId?: SortOrder;
  updatedAt?: SortOrder;
};
