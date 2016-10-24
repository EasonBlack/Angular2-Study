import {Component} from '@angular/core';
@Component({
    selector: 'site-left-menu',
    templateUrl: 'left-menu.template.html'
})
export class SiteLeftMenuComponent {
    public isActive: number = -1;
    public siteMenus: any[] = [
        {title: 'Location', id: 'location'},
        {title: 'Work Order', id: 'workorder'},
        {title: 'Work Plan',  children:[
            {title: 'Routine Schedule', id: "workplan"}
        ]},
    ]
}