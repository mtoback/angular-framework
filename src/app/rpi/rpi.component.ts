import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../services/school.service';
import {ISchool} from '../services/school.model';

@Component({
  selector: 'app-rpi',
  templateUrl: './rpi.component.html',
  styleUrls: ['./rpi.component.css']
})
export class RPIComponent implements OnInit {

  constructor(private  schoolService: SchoolService) { }
  school: ISchool;
  ngOnInit(): void {
    this.schoolService.getSchoolInfo('rpi').subscribe((data)=> {
      this.school = data;
    })
  }

}
