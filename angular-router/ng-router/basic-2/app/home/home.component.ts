import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

export class Info {
    id: number;
    name: string;
}
@Component({
    selector: 'app-home',
    template: `
    <div>
     <ul>
      <li *ngFor="let info of infos" (click)="onSelect(info)">
        {{info.name}}
      </li>

     </ul>
    </div>
    <!--<nav>-->
      <!--<a routerLink="./infos" routerLinkActive="active">Info List</a>-->
      <!--<a routerLink="./info/12"  routerLinkActive="active">Info Detail</a>-->
     <!--</nav>-->
     <router-outlet></router-outlet>
    `
})
export class HomeComponent {

    infos:Info[];
    constructor(private route: ActivatedRoute,
                  private router: Router) {

        this.infos = [
            {id: 1 , name :'aaa'},
            {id: 2 , name :'bbb'},
            {id: 3 , name :'ccc'},
            {id: 4 , name :'ddd'}
        ]
    }

    onSelect(info: Info) {
        this.router.navigate(['info', info.id],{ relativeTo: this.route });
    }
}