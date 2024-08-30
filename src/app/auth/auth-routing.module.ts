import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthLayoutComponent } from '../layout/auth-layout/auth-layout.component';  // Importa AuthLayoutComponent

const routes: Routes = [
  { 
    path: 'login', 
    component: AuthLayoutComponent, 
    children: [
      { path: '', component: LoginComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }