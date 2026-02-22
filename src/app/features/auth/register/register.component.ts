import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerData = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService,
              private router: Router) {}

  onRegister() {
    this.authService.register(this.registerData).subscribe({
      next: () => {
        alert('Registration Successful');
        this.router.navigate(['/login']);
      },
      error: () => {
        alert('Registration Failed');
      }
    });
  }
}