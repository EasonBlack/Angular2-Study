import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <div>{{title}}</div>
    <ul>
       <app-item [ItemValue]="'view1'"  (titleUpdated)="myTitleUpdated($event)" ></app-item>
       <app-item [ItemValue]="aaa"  (titleUpdated)="myTitleUpdated($event)"  ></app-item>
    </ul>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
    public aaa:string = 'view2';
    public title:string = '';
    constructor() {

    }
    myTitleUpdated(str:any) {
        this.title = str;
    }
}