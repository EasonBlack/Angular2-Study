import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProjectComponent} from './project/project.component';
import {InfoComponent} from './project/info/info.component';
import {OrderComponent} from './project/order/order.component';


const appRoutes:Routes = [
    {
        path: '',
        component: AppComponent,
    },
    {
        path: 'dashboard',
        loadChildren: () => require("./dashboard/dashboard.module")("DashboardModule")
        // loadChildren: './app/dashboard/dashboard.module#DashboardModule',
    },
    {
        path: 'project',
        loadChildren: () => require("./project/project.module")("ProjectModule")
        //loadChildren: './app/project/project.module#ProjectModule',
    }
];


export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});