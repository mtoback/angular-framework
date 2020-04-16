import { Component, OnInit } from '@angular/core';
import {ICompany} from '../services/company.model';
import {CompanyService} from '../services/company.service';

@Component({
  selector: 'app-chordiant',
  templateUrl: './chordiant.component.html',
  styleUrls: ['./chordiant.component.css']
})
export class ChordiantComponent implements OnInit {

  constructor(private  companyService: CompanyService) { }
  company: ICompany;
  ngOnInit(): void {
    this.companyService.getCompanyInfo('chordiant').subscribe((data)=> {
      this.company = data;
    })
  }

}
