import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { ExportEmpRequest } from '../models/export-emp-request.model';
import { ExportEmpResponse } from '../models/export-emp-response.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl ='http://localhost:5169/api/Employee';


  constructor(private http:HttpClient) { 


  }

   getFilteredEmployees(filters: ExportEmpRequest) {
    return this.http.post<ExportEmpResponse>(`${this.baseUrl}/filter`, filters);
  }

  exportEmployees(filters: ExportEmpRequest) {
    return this.http.post(`${this.baseUrl}/export`, filters, {
      responseType: 'blob'
    });
  }

  //Method for display all employee
 getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/GetAllEmployees`);
  }
//Method for display emploee by ID
  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/GetEmployeeById/${id}`);
  }

create(employee: Employee): Observable<any> {
    return this.http.post(`${this.baseUrl}/AddEmployee`, employee,{responseType: 'text'});
  }

  update(id: number, employee: Employee): Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdateEmployee`, employee,{responseType:'text'});
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/DeleteEmployee/${id}`,{responseType:'text'});
  }

}
