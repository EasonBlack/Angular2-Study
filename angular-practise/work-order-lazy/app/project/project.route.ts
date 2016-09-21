import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProjectComponent} from './project.component';
import {InfoComponent} from './info/info.component';
import {OrderComponent} from './order/order.component';


const appRoutes:Routes = [
    {
        path: '',  component: ProjectComponent
    },
    {
        path: 'project', component: ProjectComponent,
        children: [
            {
                path: '',
                component: InfoComponent
            },
            {
                path: 'info',
                component: InfoComponent
            }, {
                path: 'order',
                component: OrderComponent
            }

        ]
    }
];


export const routing:ModuleWithProviders = RouterModule.forChild(appRoutes);