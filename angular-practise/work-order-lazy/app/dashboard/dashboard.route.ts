import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';


const appRoutes:Routes = [
    {
        path: '', component: DashboardComponent
    },
    {
        path: 'dashboard', component: DashboardComponent,
    }
];


export const routing:ModuleWithProviders = RouterModule.forChild(appRoutes);