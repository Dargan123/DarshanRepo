import { Directive } from '@angular/core';
import {ElementRef} from '@angular/core';
import { HostListener} from '@angular/core';
@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  constructor(private eobj:ElementRef) {
  this.eobj.nativeElement.style.background='yellow';
  this.eobj.nativeElement.style.fontWeight="1000";
  //this.eobj.nativeElement.style.color='red';

   }

  // @HostListener('mouseenter')onmouseenter()
  // {
  //   this.eobj.nativeElement.style.color='red';
  // }

  // @HostListener('mouseleave')onmouseleave()
  // {
  //   this.eobj.nativeElement.style.color='black';
  // }
 
}
