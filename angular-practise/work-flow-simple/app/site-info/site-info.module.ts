import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {ModalModule} from 'angular2-modal';
import {BootstrapModalModule} from 'angular2-modal/plugins/bootstrap';

import {SiteInfoRoutingModule} from './site-info.route';
import {SiteInfoComponent} from './site-info.component';
import {SiteLeftMenuComponent} from './left-menu/left-menu.component';
import {LocationComponent} from './location/location.component';
import {LocationAreaListComponent} from './location/area-list/area-list.component';
import {LocationAreaInfoComponent} from './location/area-info/area-info.component';
import {AreaAddModal} from './location/area-add/area-add.component'
import {WorkOrderComponent} from './workorder/workorder.component';
import {WorkPlanComponent} from './workplan/workplan.component';

import {TableComponent} from '../common/table/table.component';



@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        SiteInfoRoutingModule,
        ModalModule.forRoot(),
        BootstrapModalModule
    ],
    declarations: [
        SiteInfoComponent,
        SiteLeftMenuComponent,
        LocationComponent,
        LocationAreaListComponent,
        LocationAreaInfoComponent,
        WorkOrderComponent,
        WorkPlanComponent,
        AreaAddModal,
        TableComponent
    ],
    entryComponents: [AreaAddModal]
})
export class SiteInfoModule {
}