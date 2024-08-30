import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { OxigenoComponent } from './spdn/oxigeno/oxigeno.component';
import { AsfixiaComponent } from './spdn/asfixia/asfixia.component';
import { EjesTejedoresComponent } from './spdn/ejes-tejedores/ejes-tejedores.component';
import { PlanAccionComponent } from './spdn/plan-accion/plan-accion.component';
import { FormulacionComponent } from './spdn/formulacion/formulacion.component';
import { InicioComponent } from './spdn/inicio/inicio.component';
import { HomeSpdnComponent } from './spdn/home-spdn/home-spdn.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    OxigenoComponent,
    AsfixiaComponent,
    EjesTejedoresComponent,
    PlanAccionComponent,
    FormulacionComponent,
    InicioComponent,
    HomeSpdnComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
