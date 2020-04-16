import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../services/company.service';
import {ICompany} from '../services/company.model';

@Component({
  selector: 'app-attorney',
  templateUrl: './attorney.component.html',
  styleUrls: ['./attorney.component.css']
})
export class AttorneyComponent implements OnInit {

  constructor(private  companyService: CompanyService) { }
  company: ICompany;
  ngOnInit(): void {
    this.companyService.getCompanyInfo('attorney')
      .subscribe((data) => {
      this.company = data;
    })
  }

}
