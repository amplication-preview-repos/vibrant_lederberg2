import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerSupportModuleBase } from "./base/customerSupport.module.base";
import { CustomerSupportService } from "./customerSupport.service";
import { CustomerSupportController } from "./customerSupport.controller";
import { CustomerSupportResolver } from "./customerSupport.resolver";

@Module({
  imports: [CustomerSupportModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerSupportController],
  providers: [CustomerSupportService, CustomerSupportResolver],
  exports: [CustomerSupportService],
})
export class CustomerSupportModule {}
