import {Component, OnInit } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <ng-table
          [config]="config"
          [rows]="rows"
          [columns]="columns">
    </ng-table>
    `
})
export class AppComponent {
    public columns:Array<any> = [
        {title: 'Id', name: 'id'},
        {title: 'Name', name: 'name'}
    ];

    public config:any = {
        paging: true,
        className: ['table-striped', 'table-bordered']
    };

    public rows:Array<any> = [
        {id: 1, name: 'aaaa'},
        {id: 2, name: 'bbbb'},
        {id: 3, name: 'cccc'}
    ];

    constructor() {

    }
}