/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Attendance } from "./Attendance";
import { AttendanceCountArgs } from "./AttendanceCountArgs";
import { AttendanceFindManyArgs } from "./AttendanceFindManyArgs";
import { AttendanceFindUniqueArgs } from "./AttendanceFindUniqueArgs";
import { CreateAttendanceArgs } from "./CreateAttendanceArgs";
import { UpdateAttendanceArgs } from "./UpdateAttendanceArgs";
import { DeleteAttendanceArgs } from "./DeleteAttendanceArgs";
import { Member } from "../../member/base/Member";
import { AttendanceService } from "../attendance.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Attendance)
export class AttendanceResolverBase {
  constructor(
    protected readonly service: AttendanceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "read",
    possession: "any",
  })
  async _attendancesMeta(
    @graphql.Args() args: AttendanceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Attendance])
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "read",
    possession: "any",
  })
  async attendances(
    @graphql.Args() args: AttendanceFindManyArgs
  ): Promise<Attendance[]> {
    return this.service.attendances(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Attendance, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "read",
    possession: "own",
  })
  async attendance(
    @graphql.Args() args: AttendanceFindUniqueArgs
  ): Promise<Attendance | null> {
    const result = await this.service.attendance(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Attendance)
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "create",
    possession: "any",
  })
  async createAttendance(
    @graphql.Args() args: CreateAttendanceArgs
  ): Promise<Attendance> {
    return await this.service.createAttendance({
      ...args,
      data: {
        ...args.data,

        member: args.data.member
          ? {
              connect: args.data.member,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Attendance)
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "update",
    possession: "any",
  })
  async updateAttendance(
    @graphql.Args() args: UpdateAttendanceArgs
  ): Promise<Attendance | null> {
    try {
      return await this.service.updateAttendance({
        ...args,
        data: {
          ...args.data,

          member: args.data.member
            ? {
                connect: args.data.member,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Attendance)
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "delete",
    possession: "any",
  })
  async deleteAttendance(
    @graphql.Args() args: DeleteAttendanceArgs
  ): Promise<Attendance | null> {
    try {
      return await this.service.deleteAttendance(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Member, {
    nullable: true,
    name: "member",
  })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "read",
    possession: "any",
  })
  async getMember(
    @graphql.Parent() parent: Attendance
  ): Promise<Member | null> {
    const result = await this.service.getMember(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
