import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "service";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.service?.toString() || String(record.id);
};
