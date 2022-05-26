import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Component({
  selector: 'res-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  @Input() public display!: boolean;
  @Input() public data!: any[];
  @Input() public cols!: string[];
  @Output() public onHideModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() public fileName!: string;
  public options: string[] = ['Excel', 'PDF'];
  public displayModal: boolean;
  public selected!: string;

  constructor() {
    this.displayModal = false;
  }

  ngOnInit(): void {
    this.displayModal = this.display;
  }

  hide() {
    this.onHideModal.emit(false);
  }

  download() {

    if (this.selected.toLowerCase() === 'excel') {

      let workbook = new Workbook();
      let worksheet = workbook.addWorksheet(`${this.fileName.toUpperCase()}`);

      let rows: any[] = this.data;
      worksheet.columns = this.setColumns();

      rows.forEach((e) => {
        worksheet.addRow(e, 'n');
      });

      workbook.xlsx.writeBuffer().then((rows) => {
        let blob = new Blob([rows], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        fs.saveAs(blob, `${this.fileName}.xlsx`);
      });

    } else if (this.selected.toLowerCase() === 'pdf') {
      const doc = new jsPDF();
      let head: string[] = [];
      let body: any[] = [];
      let item: any[] = [];
      console.log(this.cols);
      head = this.cols.filter(value => value !== 'acciones');

      this.data.forEach(value => {
        head.forEach(key => {
          item.push(value[key]);
        })
        body.push(item);
        item = [];
      })

      autoTable(doc, {
        head: [head],
        body: body
      })
      doc.save(`${this.fileName}.pdf`)
    }
    this.displayModal = false;

  }

  setColumns(): any[] {
    let columns: any[] = [];
    let headers: string[] = this.cols;
    headers.forEach((e) => {
      columns.push({
        header: e,
        key: e,
      });
    });

    console.log(columns);
    return columns;
  }


}
