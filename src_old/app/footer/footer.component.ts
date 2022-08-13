import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`
  :host ::ng-deep button {
      margin-right: .5em;
  }
`]
})
export class FooterComponent implements OnInit {
  public ctext:string="";
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  public upper()
  {
    this.ctext="MARVELLOUS INFOSYSTEMS";
  }
  public lower()
  {
    this.ctext="marvellous infosystems";
  }
  public clicked()
  {
    this.ctext="Educating for Better Tommorow"
  }
}
