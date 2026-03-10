import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SalaryPredictionRequest } from '../models/salary-predict-request.model';
import { Observable } from 'rxjs';
import { SalaryPredictionResponse } from '../models/salary-predict-response.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryPredictService {

  private baseUrl='http://localhost:5169/api/SalaryPrediction';
  constructor(private http:HttpClient) { }

  predictSalary(data: SalaryPredictionRequest):Observable<SalaryPredictionResponse>{
    return this.http.post<SalaryPredictionResponse>(`${this.baseUrl}/predict`,data);
  }


}
