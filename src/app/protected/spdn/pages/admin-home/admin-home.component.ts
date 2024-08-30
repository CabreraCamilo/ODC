import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {
  user: any = {};
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.authService.getUserSesion().subscribe({
      next: (response) => {
        this.user = response;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
