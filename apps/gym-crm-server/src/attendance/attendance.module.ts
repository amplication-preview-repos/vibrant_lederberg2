import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AttendanceModuleBase } from "./base/attendance.module.base";
import { AttendanceService } from "./attendance.service";
import { AttendanceController } from "./attendance.controller";
import { AttendanceResolver } from "./attendance.resolver";

@Module({
  imports: [AttendanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [AttendanceController],
  providers: [AttendanceService, AttendanceResolver],
  exports: [AttendanceService],
})
export class AttendanceModule {}
