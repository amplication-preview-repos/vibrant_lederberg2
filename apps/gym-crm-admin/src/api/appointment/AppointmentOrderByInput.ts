import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  memberId?: SortOrder;
  service?: SortOrder;
  timeSlot?: SortOrder;
  trainer?: SortOrder;
  updatedAt?: SortOrder;
};
