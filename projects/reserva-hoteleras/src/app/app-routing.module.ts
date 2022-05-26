import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageLoginComponent } from './core/pages/page-login/page-login.component';



const routes: Routes = [
  { path: '', component: PageLoginComponent },
  { path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then((m) => m.ClientesModule) },
  { path: 'habitaciones', loadChildren: () => import('./habitaciones/habitaciones.module').then((m) => m.HabitacionesModule) },
  { path: 'reportes', loadChildren: () => import('./reportes/reportes.module').then((m) => m.ReportesModule) },
  { path: 'reservas', loadChildren: () => import('./reservas/reservas.module').then((m) => m.ReservasModule) },
  { path: 'servicios', loadChildren: () => import('./servicios/servicios.module').then((m) => m.ServiciosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
