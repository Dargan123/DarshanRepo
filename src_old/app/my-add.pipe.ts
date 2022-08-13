import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    var sum=0;
    sum=value+args[0];
    return sum;
  }

}
