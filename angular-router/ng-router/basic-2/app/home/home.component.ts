import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Info} from './home';

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
export class HomeComponent implements OnInit {

    infos : Info[]

    constructor(private route: ActivatedRoute,
                  private router: Router) {
    }

    onSelect(info: Info) {
        this.router.navigate(['info', info.id],{ relativeTo: this.route });
    }

    ngOnInit() {
        this.route.data.forEach((data: {infos: Info[]}) => {
          this.infos = data.infos;
        });
    }
}