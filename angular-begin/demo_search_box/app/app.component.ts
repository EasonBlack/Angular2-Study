import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.tpl.html'
})
export class AppComponent {
    myresult: string;
    constructor() {
        this.myresult = 'Hello World';
    }
}