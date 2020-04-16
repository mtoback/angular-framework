import { Injectable, EventEmitter} from '@angular/core';
import { Subject, Observable, of  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import {ICompany} from './company.model';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) { }
  getCompanyInfo(companyName: string): Observable<ICompany> {
    return this.http.get<ICompany>(`/api/${companyName}`)
      .pipe(catchError(this.handleError<ICompany>(`getCompanyInfo:${companyName}`)));
  }
  handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
    }
}
