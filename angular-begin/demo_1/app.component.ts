import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
<h1>My First Angular 2 xxxxx</h1>
<div my-div></div>
`
})
export class AppComponent {
}

@Component({
    selector: '[my-div]',
    template: `
        <span>This is my div component</span>
        <input type="text" [value]="myValue"/>
    `
})
export class MyDivComponent {
    myValue='aaaaa';
}