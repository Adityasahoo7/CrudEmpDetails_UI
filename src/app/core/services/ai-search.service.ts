import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiSearchService {
//private baseUrl='http://localhost:5169/api/ai-search';

private baseUrl='https://empdt-api-a9b0c8hjgzh4brfg.indiasouthcentral-01.azurewebsites.net/api/ai-search';
  constructor(private http:HttpClient) { }



  search(queryText: string): Observable<Employee[]> {
  return this.http.post<Employee[]>(this.baseUrl, {
    naturalLanguageQuery: queryText
  });
}




}
