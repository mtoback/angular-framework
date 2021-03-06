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
    const backend = localStorage.getItem('backend');
    return this.http.get<ISchool>(`/api/${backend}/school/${schoolName}`)
      .pipe(catchError(this.handleError<ISchool>(`getSchoolInfo:${schoolName}`)));
  }
  handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
    }
}
