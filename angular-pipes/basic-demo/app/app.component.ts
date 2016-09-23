import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.tpl.html'
})
export class AppComponent {
    items:Array = [];

    constructor() {
        this.items = [1, 2, 3, 4, 5]
    }

    add(v) {
        this.items.push(v);
    }
}