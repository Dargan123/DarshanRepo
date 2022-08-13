import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {
 
  transform(value: string): string{
    let temp:string="";
    var count=value.length-1;
    for(count;count>=0;count--)
    {
      temp+=value[count];
    }
    return temp;
  }

}
 