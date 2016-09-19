import {Component} from '@angular/core';

@Component({
    selector: 'about',
    template: `
    <h3>
      This is About Nav
    </h3>
     <nav>
      <a [routerLink]="['./info']" routerLinkActive="active">Info</a>
      <a [routerLink]="['./help']"  routerLinkActive="active">Help</a>
     </nav>
     <router-outlet></router-outlet>
  `
})
export class AboutComponent {
}