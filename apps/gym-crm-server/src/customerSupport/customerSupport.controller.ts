import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerSupportService } from "./customerSupport.service";
import { CustomerSupportControllerBase } from "./base/customerSupport.controller.base";

@swagger.ApiTags("customerSupports")
@common.Controller("customerSupports")
export class CustomerSupportController extends CustomerSupportControllerBase {
  constructor(
    protected readonly service: CustomerSupportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
