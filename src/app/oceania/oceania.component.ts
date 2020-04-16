import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../services/company.service';
import {ICompany} from '../services/company.model';

@Component({
  selector: 'app-oceania',
  templateUrl: './oceania.component.html',
  styleUrls: ['./oceania.component.css']
})
export class OceaniaComponent implements OnInit {

  constructor(private  companyService: CompanyService) { }
  company: ICompany;
  ngOnInit(): void {
    this.companyService.getCompanyInfo('oceania').subscribe((data) => {
      this.company = data;
    })
  }

}
