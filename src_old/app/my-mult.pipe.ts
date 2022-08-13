import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    var ans=0;
    ans=value*args[0];
    return ans;
  }

}
