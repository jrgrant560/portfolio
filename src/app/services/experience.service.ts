import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  url = 'http://localhost:3000';
  urlExperienceLanguages = 'http://localhost:3000/ExpDataModelLanguages';

  constructor(private http: HttpClient) { }

  getAllExperienceLanguages(): Observable < any > {
    return this.http.get<any>(this.urlExperienceLanguages);
  }

  getSingleExperienceLanguage(id: number) : Observable<any> {
    return this.http.get<any>(`${this.urlExperienceLanguages}/${id}`);

  }
}
