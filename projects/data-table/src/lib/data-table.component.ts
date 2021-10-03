import { Component, Input } from '@angular/core';

@Component({
 selector: 'blx-data-table',
 templateUrl: './data-table.component.html',
 styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
 @Input() columns: string[];
 @Input() rows: any[];

 constructor() { }
}

