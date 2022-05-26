import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'res-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  public data: any[] = [
    { id: '1', numero: '101', estado: 'Libre', tipo: 'Normal', pago: 'Pagada' },
    { id: '2', numero: '102', estado: 'Ocupada', tipo: 'Ejecutiva', pago: 'Sin pagar' },
    { id: '3', numero: '103', estado: 'Libre', tipo: 'Normal', pago: 'Adelanto' },
    { id: '4', numero: '104', estado: 'Limpieza', tipo: 'VIP', pago: 'Pagada' },
    { id: '5', numero: '105', estado: 'Libre', tipo: 'Ejecutiva', pago: 'Pagada' }
  ]

  public cols: string[] = ['id', 'numero', 'estado', 'tipo', 'pago', 'acciones'];

  public displayModalExports: boolean = false;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  delete(id: number): void {

    let habitacion = this.data.find(value => value.id = id);
    this.confirmationService.confirm({
      message: `Seguro que desea eliminar la Habitación: ${habitacion.numero}`,
      header: 'Confirmar eliminación',
      icon: 'pi pi-trash',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      rejectButtonStyleClass: ' p-button-rounded p-button-danger',
      acceptButtonStyleClass: '	p-button-rounded p-button-primary',
      accept: () => {
        this.data = this.data.filter(val => val.id !== id)
        this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: 'Habitación eliminada exitosamente' });
      }
    });
  }

  action(accion: string): void {
    switch (accion) {
      case 'export':
        this.showModalExport();
        break;
      case 'new':
        break;
    }
  }

  showModalExport(show: boolean = true): void {
    this.displayModalExports = show;
  }


}
