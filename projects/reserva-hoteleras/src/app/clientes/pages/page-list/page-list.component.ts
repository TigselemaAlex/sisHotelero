import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { DownloadComponent } from '../../../shared/components/download/download.component';


@Component({
  selector: 'res-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  public data: any[] = [{
    cedula: '1801',
    nombre: 'Alex',
    apellido: 'Tigselema',
    telefono: '0999999999'
  },
  {
    cedula: '1802',
    nombre: 'Jose',
    apellido: 'Pazmiño',
    telefono: '0999999998'
  },
  {
    cedula: '1803',
    nombre: 'Jhoel',
    apellido: 'Puetate',
    telefono: '0999999997'
  },
  {
    cedula: '1804',
    nombre: 'Jhoel',
    apellido: 'Puetate',
    telefono: '0999999997'
  }
    ,
  {
    cedula: '1805',
    nombre: 'Jhoel',
    apellido: 'Puetate',
    telefono: '0999999997'
  }
    ,
  {
    cedula: '1806',
    nombre: 'Jhoel',
    apellido: 'Puetate',
    telefono: '0999999997'
  }
    ,
  {
    cedula: '1807',
    nombre: 'Jhoel',
    apellido: 'Puetate',
    telefono: '0999999997'
  }
    ,
  {
    cedula: '1808',
    nombre: 'Jhoel',
    apellido: 'Puetate',
    telefono: '0999999997'
  }
    ,
  {
    cedula: '1809',
    nombre: 'Jhoel',
    apellido: 'Puetate',
    telefono: '0999999997'
  }
    ,
  {
    cedula: '1810',
    nombre: 'Jhoel',
    apellido: 'Puetate',
    telefono: '0999999997'
  }
    ,
  {
    cedula: '1811',
    nombre: 'Jhoel',
    apellido: 'Puetate',
    telefono: '0999999997'
  }
    ,
  {
    cedula: '1812',
    nombre: 'Jhoel',
    apellido: 'Puetate',
    telefono: '0999999997'
  }
    ,
  {
    cedula: '1813',
    nombre: 'Jhoel',
    apellido: 'Puetate',
    telefono: '0999999997'
  }
    ,
  {
    cedula: '1814',
    nombre: 'Jhoel',
    apellido: 'Puetate',
    telefono: '0999999997'
  }
    ,
  {
    cedula: '1815',
    nombre: 'Jhoel',
    apellido: 'Puetate',
    telefono: '0999999997'
  }
    ,
  {
    cedula: '1816',
    nombre: 'Jhoel',
    apellido: 'Puetate',
    telefono: '0999999997'
  }];

  public cols: string[] = ['cedula', 'nombre', 'apellido', 'telefono', 'acciones'];
  public displayModalExports: boolean = false;


  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private displayModal: Dialog) { }

  ngOnInit(): void {
  }
  delete(cedula: number) {
    this.confirmationService.confirm({
      message: `Seguro que desea eliminar el cliente con cédula: ${cedula}`,
      header: 'Confirmar eliminación',
      icon: 'pi pi-trash',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      rejectButtonStyleClass: ' p-button-rounded p-button-danger',
      acceptButtonStyleClass: '	p-button-rounded p-button-primary',
      accept: () => {
        this.data = this.data.filter(val => val.cedula !== cedula)
        this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: 'Cliente eliminado exitosamente' });
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
