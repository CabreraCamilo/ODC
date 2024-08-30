import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)  // Carga el módulo de autenticación
  },
  {
    path: 'spdn',
    data: { breadcrumb: 'Observatorio de Drogas de Colombia' }, 
    canActivate: [AuthGuard],  // Protege la ruta con AuthGuard
    loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule)  // Carga diferida de ProtectedModule
  },
  { path: '**', redirectTo: '' }  // Redirecciona cualquier otra ruta a la página de inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }