import {Component, Input} from '@angular/core';
@Component({
    selector: 'item',
    template: `
    <div>{{title}}</div>
    `
})
export class ItemComponent {
    @Input('itemTitle') title: string;
}