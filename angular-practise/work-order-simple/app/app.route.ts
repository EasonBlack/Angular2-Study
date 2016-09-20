import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ProjectComponent} from './project/project.component';
import {InfoComponent} from './project/info/info.component';
import {OrderComponent} from './project/order/order.component';


const appRoutes:Routes = [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {
        path: 'project', component: ProjectComponent,
        children: [
            {
                path: '',
                component: InfoComponent
            },{
                path: 'info',
                component: InfoComponent
            },{
                path: 'order',
                component: OrderComponent
            }

        ]
    },
];


export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});