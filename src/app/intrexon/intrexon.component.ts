import { Component, OnInit } from '@angular/core';
import {ICompany} from '../services/company.model';
import {CompanyService} from '../services/company.service';

@Component({
  selector: 'app-intrexon',
  templateUrl: './intrexon.component.html',
  styleUrls: ['./intrexon.component.css']
})
export class IntrexonComponent implements OnInit {

  constructor(private  companyService: CompanyService) { }
  company: ICompany;
  ngOnInit(): void {
    this.companyService.getCompanyInfo('intrexon').subscribe((data) => {
      this.company = data;
    })
  }

}
