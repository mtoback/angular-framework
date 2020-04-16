import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../services/company.service';
import {ICompany} from '../services/company.model';

@Component({
  selector: 'app-niosh',
  templateUrl: './niosh.component.html',
  styleUrls: ['./niosh.component.css']
})
export class NIOSHComponent implements OnInit {

  constructor(private  companyService: CompanyService) { }
  company: ICompany;
  ngOnInit(): void {
    this.companyService.getCompanyInfo('niosh').subscribe((data) => {
      this.company = data;
    })
  }


}
