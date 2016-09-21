import {NgModule}       from '@angular/core';
//import {BrowserModule}  from '@angular/platform-browser';
import {CommonModule}  from '@angular/common';
import {routing}  from './project.route';
import {ProjectComponent} from './project.component';

import {LeftmenuComponent} from './leftmenu/leftmenu.component';
import {InfoComponent} from './info/info.component';
import {OrderComponent} from './order/order.component';

@NgModule({
    imports: [
        CommonModule,
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