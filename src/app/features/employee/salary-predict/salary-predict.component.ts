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
    joiningDate: new Date(),
    department: ''
  };

  predictedSalary: number | null = null;

  constructor(private salaryService: SalaryPredictService) {}

  predict() {

  console.log("Predict clicked");

  this.salaryService.predictSalary(this.predictData)
    .subscribe({
      next: (res) => {

        console.log("API Response:", res);

        this.predictedSalary = res.predictedSalary;

      },
      error: (err) => {
        console.error("Prediction error", err);
        alert("Prediction failed");
      }
    });

}

}