import { Directive } from '@angular/core';
import {ElementRef} from '@angular/core';
import { HostListener} from '@angular/core';

@Directive({
  selector: '[appHello1]'
})
export class Hello1Directive {

  constructor(private eobj:ElementRef) { }
  @HostListener('mouseenter')onmouseenter()
  {
    this.eobj.nativeElement.style.color='green';
  }

  @HostListener('mouseleave')onmouseleave()
  {
    this.eobj.nativeElement.style.color='black';
  }
}
