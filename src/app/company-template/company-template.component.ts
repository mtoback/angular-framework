import {Component, Input, OnInit} from '@angular/core';
import {ICompany} from '../services/company.model';

@Component({
  selector: 'app-company-template',
  templateUrl: './company-template.component.html',
  styleUrls: ['./company-template.component.css']
})
export class CompanyTemplateComponent implements OnInit {
  @Input() company: ICompany;

  constructor() { }

  ngOnInit(): void {
  }

}
