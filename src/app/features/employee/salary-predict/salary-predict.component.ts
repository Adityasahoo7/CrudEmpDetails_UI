import { Component } from '@angular/core';
import { SalaryPredictService } from 'src/app/core/services/salary-predict.service';
import { SalaryPredictionRequest } from 'src/app/core/models/salary-predict-request.model';

@Component({
  selector: 'app-salary-predict',
  templateUrl: './salary-predict.component.html',
  styleUrls: ['./salary-predict.component.css']
})
export class SalaryPredictComponent {

  predictData: SalaryPredictionRequest = {
    age: 0,
    joiningDate: '',
    department: ''
  };

  predictedSalary: number | null = null;

  constructor(private salaryService: SalaryPredictService) {}

  predict() {

    this.salaryService.predictSalary(this.predictData)
      .subscribe({
        next: (res) => {
          this.predictedSalary = res.salary;
        },
        error: (err) => {
          console.error(err);
          alert("Prediction Failed");
        }
      });

  }

}