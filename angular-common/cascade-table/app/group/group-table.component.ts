import {Component, Input} from '@angular/core';
@Component({
    selector: 'app-table',
    template: `
    <div class="table__container">
       <table class="table table-striped">
          <thead>
              <tr>
                 <th *ngFor="let h of getColumns()">{{h}}</th>
              </tr>
          </thead>
          <tbody>
             <tr *ngFor="let r of rows">
                 <td *ngFor="let c of getColumns()">
                     {{r[c]}}
                 </td>
             </tr>
          </tbody>
      </table>
    </div>
    `
})
export class GroupTableComponent {
    @Input() rows: any[];

    constructor() {}

    getColumns() {
        let headers:any[]=[];
        if(!this.rows) return ;
        for(let a in this.rows[0]) {
            headers.push(a);
        }
        return headers;
    }
}