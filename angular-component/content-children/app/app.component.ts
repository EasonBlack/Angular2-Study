import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div>
        <items>
            <h2>Hi</h2>
            <item [itemTitle]="'Hello'"></item>
            <item [itemTitle]="'World'"></item>
        </items>
    </div>
    `
})
export class AppComponent {
    constructor() {

    }
}