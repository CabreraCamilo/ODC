import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';  // Suponiendo que tienes un AuthService

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {  // Verifica si el usuario está autenticado
      return true;
    } else {
      this.router.navigate(['/auth/login']);  // Redirige al login si no está autenticado
      return false;
    }
  }
}