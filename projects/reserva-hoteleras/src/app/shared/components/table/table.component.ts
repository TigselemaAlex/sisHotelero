import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { environment } from 'projects/reserva-hoteleras/src/environments/environment';

@Component({
  selector: 'res-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() public cols!: string[];
  @Input() public data!: any[];
  @Input() public template!: TemplateRef<any>;
  @Output() public onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() public onAction: EventEmitter<string> = new EventEmitter<string>();

  public pageSize: number = environment.pageSize;
  constructor() { }

  ngOnInit(): void {


  }

  delete(id: number): void {
    console.log(id)
    this.onDelete.emit(id);
  }
  action(accion: string): void {
    this.onAction.emit(accion);
  }

}
