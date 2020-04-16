import { Injectable, EventEmitter} from '@angular/core';
import { Subject, Observable, of  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import {ICompany} from './company.model';
import {ISchool} from './school.model';
@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  constructor(private http: HttpClient) { }
  getSchoolInfo(schoolName: string): Observable<ISchool> {
    return this.http.get<ISchool>(`/api/school/${schoolName}`)
      .pipe(catchError(this.handleError<ISchool>(`getCompanyInfo:${schoolName}`)));
  }
  handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
    }
}
