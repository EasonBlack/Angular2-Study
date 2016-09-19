import { Component, Input } from '@angular/core';
import { Item } from '../item';

@Component({
    selector: 'item-detail',
    templateUrl: './app/detail/detail.component.tpl.html'
})
export class DetailComponent {
    @Input() item: Item;
}