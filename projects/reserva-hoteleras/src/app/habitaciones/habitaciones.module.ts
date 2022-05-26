import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HabitacionesRoutingModule } from './habitaciones-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    PageListComponent
  ],
  providers: [ConfirmationService,
    MessageService],
  imports: [
    CommonModule,
    HabitacionesRoutingModule,
    SharedModule
  ]
})
export class HabitacionesModule { }
