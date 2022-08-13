import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {
  public name="Marvellous";
  public sname1:any;
  public uname1:any;
  public cname1:any;
  constructor() { }

  ngOnInit(): void { 
    
        this.sname1=this.name.toLowerCase();
    
   
        this.uname1=this.name.toUpperCase();
    
      this.name;
    
      this.cname1=this.name.concat(" Infosystems");
  
  }
  
 
}
