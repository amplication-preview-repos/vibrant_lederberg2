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
import { MemberService } from "../member.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MemberCreateInput } from "./MemberCreateInput";
import { Member } from "./Member";
import { MemberFindManyArgs } from "./MemberFindManyArgs";
import { MemberWhereUniqueInput } from "./MemberWhereUniqueInput";
import { MemberUpdateInput } from "./MemberUpdateInput";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { AppointmentWhereUniqueInput } from "../../appointment/base/AppointmentWhereUniqueInput";
import { AttendanceFindManyArgs } from "../../attendance/base/AttendanceFindManyArgs";
import { Attendance } from "../../attendance/base/Attendance";
import { AttendanceWhereUniqueInput } from "../../attendance/base/AttendanceWhereUniqueInput";
import { CustomerSupportFindManyArgs } from "../../customerSupport/base/CustomerSupportFindManyArgs";
import { CustomerSupport } from "../../customerSupport/base/CustomerSupport";
import { CustomerSupportWhereUniqueInput } from "../../customerSupport/base/CustomerSupportWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MemberControllerBase {
  constructor(
    protected readonly service: MemberService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Member })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMember(@common.Body() data: MemberCreateInput): Promise<Member> {
    return await this.service.createMember({
      data: {
        ...data,

        membership: data.membership
          ? {
              connect: data.membership,
            }
          : undefined,
      },
      select: {
        address: true,
        createdAt: true,
        dateOfBirth: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,

        membership: {
          select: {
            id: true,
          },
        },

        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Member] })
  @ApiNestedQuery(MemberFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async members(@common.Req() request: Request): Promise<Member[]> {
    const args = plainToClass(MemberFindManyArgs, request.query);
    return this.service.members({
      ...args,
      select: {
        address: true,
        createdAt: true,
        dateOfBirth: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,

        membership: {
          select: {
            id: true,
          },
        },

        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Member })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async member(
    @common.Param() params: MemberWhereUniqueInput
  ): Promise<Member | null> {
    const result = await this.service.member({
      where: params,
      select: {
        address: true,
        createdAt: true,
        dateOfBirth: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,

        membership: {
          select: {
            id: true,
          },
        },

        phone: true,
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
  @swagger.ApiOkResponse({ type: Member })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMember(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() data: MemberUpdateInput
  ): Promise<Member | null> {
    try {
      return await this.service.updateMember({
        where: params,
        data: {
          ...data,

          membership: data.membership
            ? {
                connect: data.membership,
              }
            : undefined,
        },
        select: {
          address: true,
          createdAt: true,
          dateOfBirth: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,

          membership: {
            select: {
              id: true,
            },
          },

          phone: true,
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
  @swagger.ApiOkResponse({ type: Member })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMember(
    @common.Param() params: MemberWhereUniqueInput
  ): Promise<Member | null> {
    try {
      return await this.service.deleteMember({
        where: params,
        select: {
          address: true,
          createdAt: true,
          dateOfBirth: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,

          membership: {
            select: {
              id: true,
            },
          },

          phone: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/appointments")
  @ApiNestedQuery(AppointmentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "read",
    possession: "any",
  })
  async findAppointments(
    @common.Req() request: Request,
    @common.Param() params: MemberWhereUniqueInput
  ): Promise<Appointment[]> {
    const query = plainToClass(AppointmentFindManyArgs, request.query);
    const results = await this.service.findAppointments(params.id, {
      ...query,
      select: {
        createdAt: true,
        date: true,
        id: true,

        member: {
          select: {
            id: true,
          },
        },

        service: true,
        timeSlot: true,
        trainer: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/appointments")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async connectAppointments(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        connect: body,
      },
    };
    await this.service.updateMember({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/appointments")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async updateAppointments(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        set: body,
      },
    };
    await this.service.updateMember({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/appointments")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async disconnectAppointments(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        disconnect: body,
      },
    };
    await this.service.updateMember({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/attendances")
  @ApiNestedQuery(AttendanceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "read",
    possession: "any",
  })
  async findAttendances(
    @common.Req() request: Request,
    @common.Param() params: MemberWhereUniqueInput
  ): Promise<Attendance[]> {
    const query = plainToClass(AttendanceFindManyArgs, request.query);
    const results = await this.service.findAttendances(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/attendances")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async connectAttendances(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: AttendanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendances: {
        connect: body,
      },
    };
    await this.service.updateMember({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/attendances")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async updateAttendances(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: AttendanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendances: {
        set: body,
      },
    };
    await this.service.updateMember({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/attendances")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async disconnectAttendances(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: AttendanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendances: {
        disconnect: body,
      },
    };
    await this.service.updateMember({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/customerSupports")
  @ApiNestedQuery(CustomerSupportFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CustomerSupport",
    action: "read",
    possession: "any",
  })
  async findCustomerSupports(
    @common.Req() request: Request,
    @common.Param() params: MemberWhereUniqueInput
  ): Promise<CustomerSupport[]> {
    const query = plainToClass(CustomerSupportFindManyArgs, request.query);
    const results = await this.service.findCustomerSupports(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        issue: true,

        member: {
          select: {
            id: true,
          },
        },

        resolution: true,
        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/customerSupports")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async connectCustomerSupports(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: CustomerSupportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customerSupports: {
        connect: body,
      },
    };
    await this.service.updateMember({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/customerSupports")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async updateCustomerSupports(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: CustomerSupportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customerSupports: {
        set: body,
      },
    };
    await this.service.updateMember({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/customerSupports")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async disconnectCustomerSupports(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: CustomerSupportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customerSupports: {
        disconnect: body,
      },
    };
    await this.service.updateMember({
      where: params,
      data,
      select: { id: true },
    });
  }
}