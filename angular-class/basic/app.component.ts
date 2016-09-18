import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>
    Hello {{name}}
    </h1>
    <child></child>
    `
})
export class AppComponent {
    public name:string;

    constructor() {
        this.name = 'World';
    }
}