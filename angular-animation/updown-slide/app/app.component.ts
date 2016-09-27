import { Component, trigger, state, animate, transition, style } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app/app.component.html',
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
            transition('active => inactive', animate('100ms ease-in-out')),
            transition('inactive => active', animate('100ms ease-in-out'))
        ])
    ]
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
