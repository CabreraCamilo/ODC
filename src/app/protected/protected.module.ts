import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MainSpdnComponent } from './spdn/layout/main-spdn/main-spdn.component';
import { HeaderSpdnComponent } from './spdn/layout/header-spdn/header-spdn.component';
import { FooterSpdnComponent } from './spdn/layout/footer-spdn/footer-spdn.component';
import { MenuSpdnComponent } from './spdn/layout/menu-spdn/menu-spdn.component';
import { PlanAccionComponent } from './spdn/pages/plan-accion/plan-accion.component';
import { IndicadoresComponent } from './spdn/pages/indicadores/indicadores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { AdminHomeComponent } from './spdn/pages/admin-home/admin-home.component';
import { AvanceIndicadorComponent } from './spdn/pages/avance-indicador/avance-indicador.component';
import { EntidadesComponent } from './spdn/pages/entidades/entidades.component';
import { RegistrarAvanceModalComponent } from './spdn/pages/avance-indicador/registrar-avance-modal/registrar-avance-modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    MainSpdnComponent,
    HeaderSpdnComponent,
    FooterSpdnComponent,
    MenuSpdnComponent,
    PlanAccionComponent,
    IndicadoresComponent,
    AdminHomeComponent,
    AvanceIndicadorComponent,
    EntidadesComponent,
    RegistrarAvanceModalComponent,
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DatePipe],
})
export class ProtectedModule { }
