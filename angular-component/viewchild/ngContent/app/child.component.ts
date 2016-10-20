import {Component} from '@angular/core';
@Component({
    selector: 'view-info',
    template: `
    <div>
    <ng-content selector="#view-title"></ng-content>
    <div>This is View Info</div>
    <ng-content select="view-footer"></ng-content>
    </div>
    `
})
export class ViewInfoComponent {
    constructor() {
    }

    sendData() {
        return 'xxxxxxxx'
    }
}
