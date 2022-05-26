import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'res-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  public showRegisterForm: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  showRegister(showRegisterForm: boolean): void {
    this.showRegisterForm = showRegisterForm;
  }

}
