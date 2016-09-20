import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {routing}  from './dashboard.route';

import {DashboardComponent} from './dashboard.component';


@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        DashboardComponent
    ],
    bootstrap: [DashboardComponent]
})
export class DashboardModule {
}