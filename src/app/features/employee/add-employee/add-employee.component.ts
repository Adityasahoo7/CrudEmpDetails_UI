import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../core/services/employee.service';
import { Employee } from '../../../core/models/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employee: Employee = {} as Employee;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  save() {
    this.employeeService.create(this.employee).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
