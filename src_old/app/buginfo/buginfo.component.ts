import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';
@Component({
  selector: 'app-buginfo',
  templateUrl: './buginfo.component.html',
  styleUrls: ['./buginfo.component.css'],
  providers: [NgbTimepickerConfig] 
})
export class BuginfoComponent implements OnInit {
    model: NgbDateStruct={
      "year": 2022,
      "month": 6,
      "day": 23
    };
    time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
    seconds = true;
    toggleSeconds() {
      this.seconds = !this.seconds;
    }
    
  constructor(config: NgbTimepickerConfig) {    
     // customize default values of ratings used by this component tree
     config.seconds = true;
     config.spinners = false;
   }

  ngOnInit(): void {
  }

}
