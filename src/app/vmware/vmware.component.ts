import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../services/company.service';
import {ICompany} from '../services/company.model';

@Component({
  selector: 'app-vmware',
  templateUrl: './vmware.component.html',
  styleUrls: ['./vmware.component.css']
})
export class VmwareComponent implements OnInit {

  constructor(private  companyService: CompanyService) { }
  company: ICompany;
  ngOnInit(): void {
    this.companyService.getCompanyInfo('vmware')
      .subscribe((data) => {
      this.company = data;
    })
  }

}
