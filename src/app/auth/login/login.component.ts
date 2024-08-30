import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {

  username = 'leo@gmail.com';
  password = 'Leo_1089480020';
  loginFailed = false;

  ngOnInit(): void {
    
  }

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        if (response) {
          this.router.navigate(['/spdn/admin']);  // Redirige a una página protegida
        } else {
          this.loginFailed = true;  // Muestra un mensaje de error si la autenticación falla
        }
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
  
}