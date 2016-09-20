import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {routing}  from './app.route';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProjectComponent} from './project/project.component';

import {LeftmenuComponent} from './project/leftmenu/leftmenu.component';
import {InfoComponent} from './project/info/info.component';
import {OrderComponent} from './project/order/order.component';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        ProjectComponent,
        LeftmenuComponent,
        InfoComponent,
        OrderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}