import { Appointment } from "../appointment/Appointment";
import { Attendance } from "../attendance/Attendance";
import { CustomerSupport } from "../customerSupport/CustomerSupport";
import { Membership } from "../membership/Membership";

export type Member = {
  address: string | null;
  appointments?: Array<Appointment>;
  attendances?: Array<Attendance>;
  createdAt: Date;
  customerSupports?: Array<CustomerSupport>;
  dateOfBirth: Date | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  membership?: Membership | null;
  phone: string | null;
  updatedAt: Date;
};
