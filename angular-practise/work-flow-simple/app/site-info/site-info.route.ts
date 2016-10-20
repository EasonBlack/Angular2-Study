import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {SiteInfoComponent} from './site-info.component';
import {LocationComponent} from './location/location.component';
import {WorkOrderComponent} from './workorder/workorder.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'siteinfo/:id', component: SiteInfoComponent,
                children: [
                    {
                        path: '', redirectTo: 'location', pathMatch: 'full',
                        component: LocationComponent
                    },
                    {
                        path: 'location',
                        component: LocationComponent
                    },
                    {
                        path: 'workorder',
                        component: WorkOrderComponent
                    },
                ]
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class SiteInfoRoutingModule {
}
