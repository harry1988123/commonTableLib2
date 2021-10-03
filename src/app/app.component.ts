import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columns: string[];
  rows: any[];
  title = 'Harendra Common table library';

  constructor() {
    this.fillTable();
  }

  private fillTable() {
    this.columns = [];

    const row = [];
    for (let i = 0; i < 10; i++) {
      const columnLabel = 'Column_' + (i + 1);
      this.columns.push(columnLabel);
      row[columnLabel] = 'Data_' + (i + 1);
    }

    this.rows = [row, row, row, row, row];
  }
}
