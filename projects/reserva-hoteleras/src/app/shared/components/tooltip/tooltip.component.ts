import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'res-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  @Output() public onAction: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  action(accion: string): void {
    this.onAction.emit(accion);
  }
}
