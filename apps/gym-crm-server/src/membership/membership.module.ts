import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MembershipModuleBase } from "./base/membership.module.base";
import { MembershipService } from "./membership.service";
import { MembershipController } from "./membership.controller";
import { MembershipResolver } from "./membership.resolver";

@Module({
  imports: [MembershipModuleBase, forwardRef(() => AuthModule)],
  controllers: [MembershipController],
  providers: [MembershipService, MembershipResolver],
  exports: [MembershipService],
})
export class MembershipModule {}
