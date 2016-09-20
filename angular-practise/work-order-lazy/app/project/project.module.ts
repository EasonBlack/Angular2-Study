import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {routing}  from './project.route';
import {ProjectComponent} from './project.component';

import {LeftmenuComponent} from './leftmenu/leftmenu.component';
import {InfoComponent} from './info/info.component';
import {OrderComponent} from './order/order.component';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        ProjectComponent,
        LeftmenuComponent,
        InfoComponent,
        OrderComponent
    ],
    bootstrap: [ProjectComponent]
})
export class ProjectModule {
}