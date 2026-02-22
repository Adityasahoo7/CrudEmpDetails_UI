import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../core/models/employee.model';
import { EmployeeService } from '../../core/services/employee.service';
import { AiSearchService } from '../../core/services/ai-search.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees: Employee[] = [];
  searchText: string = '';

  constructor(
    private employeeService: EmployeeService,
    private aiSearchService: AiSearchService,
    private router: Router,
    private authService: AuthService 
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

logout() {
  this.authService.logout();
  this.router.navigate(['/login']);
}


  loadEmployees() {
    this.employeeService.getAll().subscribe(data => {
      this.employees = data;
    });
  }

  searchEmployees() {
    if (!this.searchText) {
      this.loadEmployees();
      return;
    }
    console.log("Message is - "+this.searchText)
    this.aiSearchService.search(this.searchText).subscribe(data => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.delete(id).subscribe(() => {
        this.employees = this.employees.filter(e => e.id !== id);
      });
    }
  }

  navigateToAdd() {
    this.router.navigate(['/add-employee']);
  }

  navigateToEdit(id: number) {
    this.router.navigate(['/edit-employee', id]);
  }

  navigateToView(id: number) {
    this.router.navigate(['/view-employee', id]);
  }
}
