import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'res-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  public menuItem!: MenuItem;
  items!: MenuItem[];

  constructor(private menuService: MenuService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const currentPath = `/${this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path}`;
    this.menuItem = this.menuService.getMenuByUrl(currentPath);

    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      },
      {
        label: 'Angular',
        icon: 'pi pi-external-link',
        url: 'http://angular.io'
      },
      {
        label: 'Router',
        icon: 'pi pi-upload',
        routerLink: '/fileupload'
      }
    ];
  }

}
