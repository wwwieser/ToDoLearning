import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bizzLogic'
})
export class BizzLogicPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
