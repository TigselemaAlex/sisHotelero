import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuList: MenuItem[] = [
    {
      label: 'Clientes',
      routerLink: '/clientes',
      icon: 'pi pi-fw pi-id-card'

    },
    {
      label: 'Habitaciones',
      routerLink: '/habitaciones',
      icon: 'pi pi-fw pi-home',
    },
    {
      label: 'Reportes',
      routerLink: '/reportes',
      icon: 'pi pi-fw pi-chart-line',
    },
    {
      label: 'Reservas',
      routerLink: '/reservas',
      icon: 'pi pi-fw pi-book',
    },
    {
      label: 'Servicios',
      routerLink: '/servicios',
      icon: 'pi pi-fw pi-slack',
    },
  ]

  constructor() { }

  public getMenu(): MenuItem[] {
    return [...this.menuList];
  }

  public getMenuByUrl(url: string): MenuItem {
    return this.menuList.find((menuItem) => menuItem.routerLink.toLowerCase() === url.toLowerCase()) as MenuItem;
  }
}
