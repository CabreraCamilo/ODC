import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../../../auth/auth.service';

@Component({
  selector: 'app-menu-spdn',
  templateUrl: './menu-spdn.component.html',
  styleUrls: ['./menu-spdn.component.scss']
})
export class MenuSpdnComponent {

  currentRoute: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Inicializa currentRoute con la ruta actual al cargar el componente
    this.currentRoute = this.router.url;
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  isActive(route: string): boolean {
    return this.currentRoute.includes(route);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);  // Redirige a una página protegida
  }


}
