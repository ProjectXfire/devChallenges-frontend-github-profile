import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxText',
  standalone: true,
})
export class MaxTextPipe implements PipeTransform {
  transform(value: string, max: number): string {
    return value.length >= max ? `${value.slice(0, max)}` : value;
  }
}
