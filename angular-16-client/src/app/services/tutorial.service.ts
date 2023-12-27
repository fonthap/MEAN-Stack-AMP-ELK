import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  createAuthorizationHeader(headers: Headers) {
    console.log("1234");
    
    headers.append('X-Elastic-APM-Transaction-Id',localStorage.getItem('key') as any); 
  }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${baseUrl}/${id}`);
  }
  // X-Elastic-APM-Transaction-Id
  create(data: any): Observable<any> {
    let headers :any = new HttpHeaders({'X-Elastic-APM-Transaction-Id':localStorage.getItem('key') as any});
    // headers.set('X-Elastic-APM-Transaction-Id',localStorage.getItem('key') as any); 
    

    // this.createAuthorizationHeader(headers);
    
    return this.http.post(baseUrl, data,{headers:headers});
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  }
}
