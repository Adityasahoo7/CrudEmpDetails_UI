import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AddEmployeeComponent } from './features/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './features/employee/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './features/employee/view-employee/view-employee.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'edit-employee/:id', component: EditEmployeeComponent },
  { path: 'view-employee/:id', component: ViewEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
