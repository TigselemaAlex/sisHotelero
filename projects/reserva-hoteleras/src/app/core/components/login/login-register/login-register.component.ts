import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'res-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  @Output()
  public onShowRegisterForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  public passwordHide: boolean = true;


  @Input() showRegisterForm!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  showPassword(): void {
    this.passwordHide = !this.passwordHide;
  }

  showRegister(): void {
    this.showRegisterForm = !this.showRegisterForm;
    console.log(this.showRegisterForm);
    this.onShowRegisterForm.emit(this.showRegisterForm);
  }

}
