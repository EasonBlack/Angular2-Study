import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { ItemComponent } from './item.component';

@Component({
    selector: 'items',
    template:`
    <div>
       <ng-content></ng-content>
    </div> 
  `
})
export class ItemsComponent implements AfterContentInit {
    @ContentChildren(ItemComponent) items: QueryList<ItemComponent>;

    ngAfterContentInit() {
        this.items.first.title += 'aaaaaaa';
        this.items.last.title += 'bbbbbb';
    }
}