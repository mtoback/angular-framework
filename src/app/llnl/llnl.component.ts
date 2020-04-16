import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../services/company.service';
import {ICompany} from '../services/company.model';

@Component({
  selector: 'app-llnl',
  templateUrl: './llnl.component.html',
  styleUrls: ['./llnl.component.css']
})
export class LlnlComponent implements OnInit {

  constructor(private  companyService: CompanyService) { }
  company: ICompany;
  ngOnInit(): void {
    this.companyService.getCompanyInfo('llnl').subscribe((data) => {
      this.company = data;
    })
  }


}
