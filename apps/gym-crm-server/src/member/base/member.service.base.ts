/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Member as PrismaMember,
  Appointment as PrismaAppointment,
  Attendance as PrismaAttendance,
  CustomerSupport as PrismaCustomerSupport,
  Membership as PrismaMembership,
} from "@prisma/client";

export class MemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MemberCountArgs, "select">): Promise<number> {
    return this.prisma.member.count(args);
  }

  async members<T extends Prisma.MemberFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MemberFindManyArgs>
  ): Promise<PrismaMember[]> {
    return this.prisma.member.findMany<Prisma.MemberFindManyArgs>(args);
  }
  async member<T extends Prisma.MemberFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MemberFindUniqueArgs>
  ): Promise<PrismaMember | null> {
    return this.prisma.member.findUnique(args);
  }
  async createMember<T extends Prisma.MemberCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MemberCreateArgs>
  ): Promise<PrismaMember> {
    return this.prisma.member.create<T>(args);
  }
  async updateMember<T extends Prisma.MemberUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MemberUpdateArgs>
  ): Promise<PrismaMember> {
    return this.prisma.member.update<T>(args);
  }
  async deleteMember<T extends Prisma.MemberDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MemberDeleteArgs>
  ): Promise<PrismaMember> {
    return this.prisma.member.delete(args);
  }

  async findAppointments(
    parentId: string,
    args: Prisma.AppointmentFindManyArgs
  ): Promise<PrismaAppointment[]> {
    return this.prisma.member
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .appointments(args);
  }

  async findAttendances(
    parentId: string,
    args: Prisma.AttendanceFindManyArgs
  ): Promise<PrismaAttendance[]> {
    return this.prisma.member
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .attendances(args);
  }

  async findCustomerSupports(
    parentId: string,
    args: Prisma.CustomerSupportFindManyArgs
  ): Promise<PrismaCustomerSupport[]> {
    return this.prisma.member
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .customerSupports(args);
  }

  async getMembership(parentId: string): Promise<PrismaMembership | null> {
    return this.prisma.member
      .findUnique({
        where: { id: parentId },
      })
      .membership();
  }
}
