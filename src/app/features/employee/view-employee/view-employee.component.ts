import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../core/services/employee.service';
import { Employee } from '../../../core/models/employee.model';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html'
})
export class ViewEmployeeComponent implements OnInit {

  employee!: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getById(id).subscribe(data => {
      this.employee = data;
    });
  }
}
