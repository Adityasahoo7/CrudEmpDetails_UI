
import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/core/models/employee.model'; 
import { ExportEmpRequest } from 'src/app/core/models/export-emp-request.model';

@Component({
 selector: 'app-exportemp',
  templateUrl: './exportemp.component.html',
  styleUrls: ['./exportemp.component.css']
})
export class ExportempComponent {

  employees: Employee[] = [];
  totalEmployees = 0;
  loading = false;

  filters: ExportEmpRequest = {
    fromDate: null,
    toDate: null,
    minSalary: null,
    maxSalary: null
  };

  constructor(private employeeService: EmployeeService) {}

  search() {
    this.loading = true;

    const request = this.prepareRequest();

    this.employeeService.getFilteredEmployees(request)
      .subscribe({
        next: (res) => {
          this.employees = res.data;
          this.totalEmployees = res.totalEmployees;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
  }

  downloadExcel() {
    const request = this.prepareRequest();

    this.employeeService.exportEmployees(request)
      .subscribe((blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');

        a.href = url;
        a.download = 'Employees.xlsx';
        a.click();

        window.URL.revokeObjectURL(url);
      });
  }

  prepareRequest(): ExportEmpRequest {
    return {
      fromDate: this.filters.fromDate || null,
      toDate: this.filters.toDate || null,
      minSalary: this.filters.minSalary ? this.filters.minSalary : null,
      maxSalary: this.filters.maxSalary ? this.filters.maxSalary : null
    };
  }
}