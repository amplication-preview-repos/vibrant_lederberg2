/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AttendanceService } from "../attendance.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AttendanceCreateInput } from "./AttendanceCreateInput";
import { Attendance } from "./Attendance";
import { AttendanceFindManyArgs } from "./AttendanceFindManyArgs";
import { AttendanceWhereUniqueInput } from "./AttendanceWhereUniqueInput";
import { AttendanceUpdateInput } from "./AttendanceUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AttendanceControllerBase {
  constructor(
    protected readonly service: AttendanceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Attendance })
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAttendance(
    @common.Body() data: AttendanceCreateInput
  ): Promise<Attendance> {
    return await this.service.createAttendance({
      data: {
        ...data,

        member: data.member
          ? {
              connect: data.member,
            }
          : undefined,
      },
      select: {
        checkInTime: true,
        checkOutTime: true,
        createdAt: true,
        date: true,
        id: true,

        member: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Attendance] })
  @ApiNestedQuery(AttendanceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async attendances(@common.Req() request: Request): Promise<Attendance[]> {
    const args = plainToClass(AttendanceFindManyArgs, request.query);
    return this.service.attendances({
      ...args,
      select: {
        checkInTime: true,
        checkOutTime: true,
        createdAt: true,
        date: true,
        id: true,

        member: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Attendance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async attendance(
    @common.Param() params: AttendanceWhereUniqueInput
  ): Promise<Attendance | null> {
    const result = await this.service.attendance({
      where: params,
      select: {
        checkInTime: true,
        checkOutTime: true,
        createdAt: true,
        date: true,
        id: true,

        member: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Attendance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAttendance(
    @common.Param() params: AttendanceWhereUniqueInput,
    @common.Body() data: AttendanceUpdateInput
  ): Promise<Attendance | null> {
    try {
      return await this.service.updateAttendance({
        where: params,
        data: {
          ...data,

          member: data.member
            ? {
                connect: data.member,
              }
            : undefined,
        },
        select: {
          checkInTime: true,
          checkOutTime: true,
          createdAt: true,
          date: true,
          id: true,

          member: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Attendance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAttendance(
    @common.Param() params: AttendanceWhereUniqueInput
  ): Promise<Attendance | null> {
    try {
      return await this.service.deleteAttendance({
        where: params,
        select: {
          checkInTime: true,
          checkOutTime: true,
          createdAt: true,
          date: true,
          id: true,

          member: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
