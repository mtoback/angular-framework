import {Component, Input, OnInit} from '@angular/core';
import {ISchool} from '../services/school.model';

@Component({
  selector: 'app-school-template',
  templateUrl: './school-template.component.html',
  styleUrls: ['./school-template.component.css']
})
export class SchoolTemplateComponent implements OnInit {

  constructor() { }
  @Input() school: ISchool;
  ngOnInit(): void {
  }

}
