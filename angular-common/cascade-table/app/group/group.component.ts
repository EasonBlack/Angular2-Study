import {Component, Input, trigger, state, animate, transition, style} from '@angular/core';
@Component({
    selector: 'app-group',
    animations: [
        trigger('groupState', [
            state('inactive', style({
                display: 'none'
            })),
            state('active', style({
                display: ''
            })),
            transition('* => *', animate('100ms ease-in'))
        ])
    ],
    template: `
    <ul class="group__list">
       <ng-container *ngFor="let group of groups">
       <li class='group__item' (click)="toggleTable(group)" >
          <span class="glyphicon glyphicon-chevron-right"
           [ngClass]="{'glyphicon-chevron-right': group.state=='inactive', 'glyphicon-chevron-down': group.state=='active'}"
          ></span> 
          {{group.name}}
       </li>
       <li [@groupState]="group.state">
           <app-table [rows]="group.children"></app-table>
       </li>
       </ng-container>
    </ul>
    `
})
export class GroupComponent {
    @Input() groups: any[];

    constructor() {
    }

    toggleTable(group: any) {
        group.state = group.state == 'active' ? 'inactive' : 'active';
    }
}