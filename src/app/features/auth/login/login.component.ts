import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService,
              private router: Router) {}

 onLogin() {
  this.authService.login(this.loginData).subscribe({
    next: (res: any) => {

      if (res.status === 200) {

        const token = res.data.token;
        const role = res.data.role;

        this.authService.saveToken(token);
        this.authService.saveRole(role);
        

        this.router.navigate(['/dashboard']);
      }

    },
    error: () => {
      alert('Invalid Credentials');
    }
  });
}
}