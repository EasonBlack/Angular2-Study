import {Component, Input} from '@angular/core';
@Component({
    selector: 'app-table',
    template: `<table>
          <thead>
             <th *ngFor="let column of columns">{{column.name}}</th>
          </thead>
          <tbody>
              <tr *ngFor="let row of rows">
                 <td *ngFor="let row_col of columns">
                     {{row[row_col.name]}}      
                 </td>
              </tr>
          </tbody>
     </table>
    `
})
export class AppTableComponent {
    @Input() columns:Array<any>;
    @Input() rows:Array<any>;
    constructor() {

    }
}