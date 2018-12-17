import { mockValidatorDecorator } from '../utils';
import { COMPARISON_OPERATORS, ComparisonOperator } from '../operators.list';

const IsString = mockValidatorDecorator('IsString');
const IsNotEmpty = mockValidatorDecorator('IsNotEmpty');
const IsIn = mockValidatorDecorator('IsIn');
const IsOptional = mockValidatorDecorator('IsOptional');

export class FilterParamDto {
  @IsNotEmpty()
  @IsString()
  field: string;

  @IsNotEmpty()
  @IsIn(COMPARISON_OPERATORS)
  operator: ComparisonOperator;

  @IsOptional()
  value?: any;
}
