import { Component, OnInit, Input , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent implements OnInit 
{
  @Output() public MyEvent = new EventEmitter();
  public parentData:any;
  // Add input decorator as it will receve the data from parent
  //@Input() public parentData:any;
  constructor() { }

  ngOnInit() {
  }
  public clicked(a:any)
  {
    this.parentData=a;  
    this.MyEvent.emit(this.parentData);
  }

}
