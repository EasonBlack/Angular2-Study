import { Component, ViewChild, ElementRef } from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.tpl.html'
})
export class AppComponent {
    myresult:string;

    constructor() {
        this.myresult = "";
    }

    myvalueChange(event) {
        this.myresult = event.value;
    }

}