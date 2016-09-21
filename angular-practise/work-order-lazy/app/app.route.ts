import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DefaultComponent} from './default.component';


const appRoutes:Routes = [
    {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
    },
    {
        path: 'dashboard',
        //loadChildren: () => require("./dashboard/dashboard.module")("DashboardModule")
        loadChildren: './app/dashboard/dashboard.module#DashboardModule',
    },
    {
        path: 'project',
        //loadChildren: () => require("./project/project.module")("ProjectModule")
        loadChildren: './app/project/project.module#ProjectModule',
    }
];


export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});