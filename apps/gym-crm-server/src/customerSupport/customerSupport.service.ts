import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerSupportServiceBase } from "./base/customerSupport.service.base";

@Injectable()
export class CustomerSupportService extends CustomerSupportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
