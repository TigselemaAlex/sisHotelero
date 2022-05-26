import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLoginComponent } from './pages/page-login/page-login.component';
import { SharedModule } from '../shared/shared.module';

import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginRegisterComponent } from './components/login/login-register/login-register.component';
import { SlideMenuComponent } from './components/menu/slide-menu/slide-menu.component';


@NgModule({
  declarations: [
    PageLoginComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
    LoginRegisterComponent,
    SlideMenuComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
  ], exports: [HeaderComponent, FooterComponent, SlideMenuComponent]
})
export class CoreModule { }
