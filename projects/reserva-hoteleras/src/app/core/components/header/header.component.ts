import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'res-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userButton = 'p-conf-buton';

  public items: any;
  constructor(private primeNgConfig: PrimeNGConfig) { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Cerrar Sesión',
        icon: 'pi pi-sign-out'
      }
    ];
  }

}
