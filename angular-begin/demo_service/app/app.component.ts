import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import {AppService} from './app.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.tpl.html',
    providers: [AppService]
})
export class AppComponent implements OnInit {

    items:Item[];
    selectedItem:Item;

    constructor(private appService:AppService) {
    }

    getItems(): void {
        this.appService.getItems().then(items=>this.items = items);
    }

    ngOnInit(): void {
        this.getItems();
    }

    onSelect(item:Item): void {
        this.selectedItem = item
    }
}