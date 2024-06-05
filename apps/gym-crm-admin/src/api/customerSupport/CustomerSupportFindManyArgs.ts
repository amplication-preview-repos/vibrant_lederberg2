import { CustomerSupportWhereInput } from "./CustomerSupportWhereInput";
import { CustomerSupportOrderByInput } from "./CustomerSupportOrderByInput";

export type CustomerSupportFindManyArgs = {
  where?: CustomerSupportWhereInput;
  orderBy?: Array<CustomerSupportOrderByInput>;
  skip?: number;
  take?: number;
};
