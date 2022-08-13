import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public s1:any='';
  public s2:any='';
  constructor() { }

  ngOnInit(): void {
  }
  public string1()
  {
    this.s2=this.s1.length;
    
  }
}
