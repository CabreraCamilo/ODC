import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Importa HomeComponent
import { AboutComponent } from './about/about.component';
import { HomeSpdnComponent } from './spdn/home-spdn/home-spdn.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Inicio' } },
  { path: 'about', component: AboutComponent, data: { breadcrumb: 'Acerca de' } },
  { path: 'spdn', component: HomeSpdnComponent, data: { breadcrumb: 'SPDN' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }