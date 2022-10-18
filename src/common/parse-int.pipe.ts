import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const tempValue = parseInt(value, 10);
    if (isNaN(tempValue)) {
      throw new BadRequestException(`${tempValue} is not a number`);
    }
    return tempValue;
  }
}
