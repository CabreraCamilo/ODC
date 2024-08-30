import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSpdnComponent } from './spdn/layout/main-spdn/main-spdn.component';
import { PlanAccionComponent } from './spdn/pages/plan-accion/plan-accion.component';
import { IndicadoresComponent } from './spdn/pages/indicadores/indicadores.component';
import { AdminHomeComponent } from './spdn/pages/admin-home/admin-home.component';
import { EntidadesComponent } from './spdn/pages/entidades/entidades.component';

const routes: Routes = [
  {
    path: 'admin',
    component: MainSpdnComponent,  // Usa el layout principal
    data: { breadcrumb: 'Admin' },  // Breadcrumb específico para la página de inicio en /admin
    children: [
      { 
        path: '', 
        component: AdminHomeComponent,  // Home dentro de /admin
        data: { breadcrumb: null },  // Breadcrumb específico para la página de inicio en /admin
      },
      { 
        path: 'plan-accion', 
        component: PlanAccionComponent, 
        data: { breadcrumb: 'Plan de acción' } 
      },
      { 
        path: 'indicadores', 
        component: IndicadoresComponent, 
        data: { breadcrumb: 'Seguimiento nueva política Drogas Nacional' } 
      },
      { 
        path: 'entidades', 
        component: EntidadesComponent, 
        data: { breadcrumb: 'Administración de entidades' } 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }