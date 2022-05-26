import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ContainerComponent } from './components/container/container.component';
import { TitleComponent } from './components/title/title.component';
import { TableComponent } from './components/table/table.component';
import { DownloadComponent } from './components/download/download.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { DialogModule } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';



@NgModule({
  declarations: [
    ContainerComponent,
    TitleComponent,
    TableComponent,
    DownloadComponent,
    TooltipComponent
  ],
  imports: [CommonModule, ButtonModule, CardModule, InputTextModule, CheckboxModule, PasswordModule, DividerModule, FormsModule, ToolbarModule, SplitButtonModule, SlideMenuModule, TableModule, ConfirmDialogModule, ToastModule, DialogModule, ListboxModule],
  exports: [ButtonModule, CardModule, InputTextModule, CheckboxModule, PasswordModule, DividerModule, FormsModule, ToolbarModule, SplitButtonModule, SlideMenuModule, TableModule, ContainerComponent, TitleComponent, TableComponent, ConfirmDialogModule, DownloadComponent, ToastModule, DialogModule, ListboxModule],
})
export class SharedModule { }
