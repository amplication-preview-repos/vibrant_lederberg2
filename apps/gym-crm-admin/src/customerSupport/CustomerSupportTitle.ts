import { CustomerSupport as TCustomerSupport } from "../api/customerSupport/CustomerSupport";

export const CUSTOMERSUPPORT_TITLE_FIELD = "id";

export const CustomerSupportTitle = (record: TCustomerSupport): string => {
  return record.id?.toString() || String(record.id);
};
