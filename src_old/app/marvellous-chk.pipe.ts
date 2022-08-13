import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param:string): string {
    var out="";
    var flag=0;
    if(param=="Prime")
    {
      var i;
      for( i=2 ; i <= value/2 ; i++) {
        if(value%i == 0) {
           out="Number is not a prime number"
           flag = 1;
           break;
        }
        }
        if(flag == 0) {
            out="Number is a Prime number";
        }
    }
    if(param=="Perfect")
    { 
        var i,sum=0,rem=0;
            for(i = 1; i < value; i++)  
            {  
            rem = value % i;  
            if (rem == 0)  
            {  
                  sum = sum + i;  
            }  
            }  
            if (sum == value)  
            out="Number is perfect number";
            else  
            out="Number is not a perfect number";
    }
    if(param=="Even")
    {
      if(value%2==0)
      {
        out="Number is Even";
      }
      else{
        out="Number is not Even";
      }
    }
    if(param=="Odd")
    {
      if(value%2!=0)
      {
        out="Number is Odd";
      }
      else{
        out="Number is not Odd";
      }
    }
    return out;
  }

}
