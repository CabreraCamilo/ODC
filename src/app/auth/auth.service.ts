import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_KEY = 'isAuthenticated';
  private user: any = null;

  constructor() {
    // Al iniciar, verifica si hay una sesión activa en localStorage
    const savedAuthState = localStorage.getItem(this.AUTH_KEY);
    this.loggedIn = savedAuthState === 'true';
  }

  private loggedIn = false;

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  login(username: string, password: string): Observable<boolean> {
    // Simula la autenticación
    if (username === 'leo@gmail.com' && password === 'Leo_1089480020') {
      this.loggedIn = true;
      localStorage.setItem(this.AUTH_KEY, 'true');  // Guarda el estado de autenticación en localStorage
      this.setUserSession({
        id: 1,
        username: 'Leo',
        name: 'Pepito',
        lasname: 'Pérez',
        email: 'leo@gmail.com',
        role: 'admin', 
        entity: 'Minjusticia'
      });
      return of(true);
    }
    return of(false);
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem(this.AUTH_KEY);  // Remueve el estado de autenticación al cerrar sesión
    this.clearUser();
  }

  setUserSession(userData: any): void {
    this.user = userData;
    localStorage.setItem('user', JSON.stringify(userData));  // Persistencia opcional
  }

  getUserSesion(): Observable<any> {
    if (!this.user) {
      const storedUser = localStorage.getItem('user');
      this.user = storedUser ? JSON.parse(storedUser) : null;
    }
    return of(this.user);
  }

  clearUser(): void {
    this.user = null;
    localStorage.removeItem('user');
  }
}