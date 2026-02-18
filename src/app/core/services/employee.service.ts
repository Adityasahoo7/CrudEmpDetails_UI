import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl ='http://localhost:5169/api/Employee';


  constructor(private http:HttpClient) { 


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
    return this.http.post(`${this.baseUrl}/AddEmployee`, employee);
  }

  update(id: number, employee: Employee): Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdateEmployee/${id}`, employee);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/DeleteEmployee/${id}`);
  }

}
