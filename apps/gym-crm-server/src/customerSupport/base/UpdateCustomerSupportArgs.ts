/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerSupportWhereUniqueInput } from "./CustomerSupportWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CustomerSupportUpdateInput } from "./CustomerSupportUpdateInput";

@ArgsType()
class UpdateCustomerSupportArgs {
  @ApiProperty({
    required: true,
    type: () => CustomerSupportWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerSupportWhereUniqueInput)
  @Field(() => CustomerSupportWhereUniqueInput, { nullable: false })
  where!: CustomerSupportWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CustomerSupportUpdateInput,
  })
  @ValidateNested()
  @Type(() => CustomerSupportUpdateInput)
  @Field(() => CustomerSupportUpdateInput, { nullable: false })
  data!: CustomerSupportUpdateInput;
}

export { UpdateCustomerSupportArgs as UpdateCustomerSupportArgs };
