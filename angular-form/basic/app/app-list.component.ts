import {Component, Input} from '@angular/core';
@Component({
    selector: 'app-list',
    templateUrl: 'app-list.template.html'
})
export class AppListComponent {
    @Input() items: any[];
    constructor() {

    }
}