import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';


@NgModule({
  declarations: [
    PageListComponent
  ],
  providers: [ConfirmationService,
    MessageService, Dialog],

  imports: [
    CommonModule,
    SharedModule,
    ClientesRoutingModule,

  ]
})
export class ClientesModule { }
