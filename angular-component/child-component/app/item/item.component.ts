import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'app-item',
    template: `
    <li (click)="activeItem()" [routerLink]="[ItemValue]">{{ItemValue}}</li>
    `
})
export class AppItemComponent {
    @Input() ItemValue: string;
    @Output() titleUpdated = new EventEmitter()

    constructor() {
    }
    activeItem() {
       this.titleUpdated.emit(this.ItemValue + ' aaaa');
    }
}