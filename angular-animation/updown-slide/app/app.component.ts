import { Component, trigger, state, animate, transition, style } from '@angular/core';

@Component({
    selector: 'app-root',
    styles: [
        ``
    ],
    animations: [
        trigger('active', [
            state('active', style({
                height: 30
            })),
            state('inactive', style({
                height: 0
            })),
            //transition('* => *', animate('300ms ease'))
            transition('active => inactive', animate('100ms ease-in-out')),
            transition('inactive => active', animate('100ms ease-in-out'))
        ])
    ],
    template: `
         <div class="container">
             <h1>Animations</h1>
             <ul>
                 <ng-container *ngFor="let item of items">
                     <li (click)="toggleActive(item)" class="list-header">{{item.name}}</li>
                     <div  [@active]="item.active" class="list-wrapper">
                         <li *ngFor="let subitem of item.children">
                             {{subitem.name}}
                         </li>
                     </div>
                 </ng-container>
             </ul>
         </div>
      `
})
export class AppComponent {

    items = [
        {"id": 1, "name": "aaaaa", "active": "active", "children": [{"name": "a1"}, {"name": "a2"}, {"name": "a3"}]},
        {"id": 2, "name": "bbbb", "active": "active", "children": [{"name": "b1"}, {"name": "b2"}, {"name": "b3"}]},
        {"id": 3, "name": "ccc", "active": "active", "children": [{"name": "c1"}, {"name": "c2"}, {"name": "c3"}]}
    ]

    toggleActive(item) {
        item.active = item.active == 'active' ? 'inactive' : 'active';
    }
}
