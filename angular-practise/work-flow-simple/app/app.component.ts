import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>
    Hello {{name}}
    </h1>
     <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/about"  routerLinkActive="active">About</a>
     </nav>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
    public name:string;

    constructor() {
        this.name = 'World';
    }
}