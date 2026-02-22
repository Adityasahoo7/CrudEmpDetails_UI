import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AddEmployeeComponent } from './features/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './features/employee/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './features/employee/view-employee/view-employee.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [

  // Default redirect
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Auth Routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Protected Routes
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-employee/:id',
    component: EditEmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'view-employee/:id',
    component: ViewEmployeeComponent,
    canActivate: [AuthGuard]
  },

  // Wildcard route
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
