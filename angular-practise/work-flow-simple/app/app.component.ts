import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <div class="app__top-menu">
      <div class="app__top-menu_title">SmartLife</div>
      <ul class="app__top-menu_link">
          <li class="active" routerLink="/sitelist" routerLinkActive="active">Site</li>
          <li routerLink="/analytics"  routerLinkActive="active">Analytics</li>
      </ul>
      <div class="app__top-menu_user">xxx xxx</div>
    </div>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
}