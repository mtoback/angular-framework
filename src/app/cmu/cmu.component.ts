import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../services/company.service';
import {ICompany} from '../services/company.model';
import {SchoolService} from '../services/school.service';
import {ISchool} from '../services/school.model';

@Component({
  selector: 'app-cmu',
  templateUrl: './cmu.component.html',
  styleUrls: ['./cmu.component.css']
})
export class CMUComponent implements OnInit {

  constructor(private  schoolService: SchoolService) { }
  school: ISchool;
  ngOnInit(): void {
    this.schoolService.getSchoolInfo('cmu').subscribe((data)=> {
      this.school = data;
    })
  }

}
