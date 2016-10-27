import {Component, ViewEncapsulation} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <div class="app__container">
        <app-list class="app__list" [items]="items"></app-list>
        <app-form class="app__form" (modelSubmit)="addItems($event);"></app-form>
    </div>
    `,
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public items: any[] = [
        {id: 1, name: 'aa', type: 2},
        {id: 2, name: 'bb', type: 2},
        {id: 3, name: 'cc', type: 3},
        {id: 4, name: 'dd', type: 3}
    ]

    constructor() {

    }

    addItems(event:any) {
        this.items.push(event.model);
    }
}