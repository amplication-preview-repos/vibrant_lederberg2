import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CustomerSupportResolverBase } from "./base/customerSupport.resolver.base";
import { CustomerSupport } from "./base/CustomerSupport";
import { CustomerSupportService } from "./customerSupport.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CustomerSupport)
export class CustomerSupportResolver extends CustomerSupportResolverBase {
  constructor(
    protected readonly service: CustomerSupportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
