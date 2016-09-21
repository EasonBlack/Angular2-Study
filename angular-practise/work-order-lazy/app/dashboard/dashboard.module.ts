import {NgModule}       from '@angular/core';
//import {BrowserModule}  from '@angular/platform-browser';
import {CommonModule}  from '@angular/common';
import {routing}  from './dashboard.route';

import {DashboardComponent} from './dashboard.component';


@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        DashboardComponent
    ],
    bootstrap: [DashboardComponent]
})
export class DashboardModule {
}