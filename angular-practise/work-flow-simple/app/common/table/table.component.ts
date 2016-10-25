import {Component, Input} from '@angular/core';
@Component({
    selector: 'app-table',
    templateUrl: 'table.template.html'
})
export class TableComponent {
    @Input() headers:any[];
    @Input() rows:any[];
    constructor() {
    }
}