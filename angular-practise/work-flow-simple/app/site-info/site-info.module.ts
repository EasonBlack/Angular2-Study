import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {SiteInfoRoutingModule} from './site-info.route';
import {SiteInfoComponent} from './site-info.component';
import {SiteLeftMenuComponent} from './left-menu/left-menu.component';
import {LocationComponent} from './location/location.component';
import {LocationAreaListComponent} from './location/area-list/area-list.component';
import {LocationAreaInfoComponent} from './location/area-info/area-info.component';
import {WorkOrderComponent} from './workorder/workorder.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        SiteInfoRoutingModule
    ],
    declarations: [
        SiteInfoComponent,
        SiteLeftMenuComponent,
        LocationComponent,
        LocationAreaListComponent,
        LocationAreaInfoComponent,
        WorkOrderComponent
    ]
})
export class SiteInfoModule {
}