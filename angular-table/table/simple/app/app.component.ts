import {Component, OnInit } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <app-table
          [rows]="rows"
          [columns]="columns">
    </app-table>
    `
})
export class AppComponent {
    public columns:Array<any> = [
        {title: 'Id', name: 'id'},
        {title: 'Name', name: 'name'}
    ];

    public rows:Array<any> = [
        {id: 1, name: 'aaaa'},
        {id: 2, name: 'bbbb'},
        {id: 3, name: 'cccc'}
    ];

    constructor() {
    }
}