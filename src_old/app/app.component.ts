import { Component } from '@angular/core';
import {NgbNavConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NgbNavConfig]
})
export class AppComponent {
  title = 'AngularProj';
  public name="marvellous infosystems PUNE";
  public batches={"name":"PPA","Duration":"4 months"};
  public today=new  Date();
  public no=1.239;
  public fees=15000;
  public str1:string="";
  public count1=0;
  public changeEvent(event:any):void{
    this.count1=event.length;
  }
}
