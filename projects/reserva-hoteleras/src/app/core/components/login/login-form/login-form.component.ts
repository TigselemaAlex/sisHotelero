import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'res-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output()
  public onShowRegisterForm: EventEmitter<boolean> = new EventEmitter<boolean>();


  public passwordHide: boolean = true;

  public showRegisterForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showPassword(): void {
    this.passwordHide = !this.passwordHide;
  }

  showRegister(): void {
    this.showRegisterForm = !this.showRegisterForm;
    this.onShowRegisterForm.emit(this.showRegisterForm);
  }

}
