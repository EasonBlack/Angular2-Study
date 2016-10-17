import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent} from './home.component';
import { InfoListComponent }    from './info-list/info-list.component';
import { InfoDetailComponent }  from './info-detail/info-detail.component';
import { InfoHelpComponent }  from './info-help/info-help.component';
import { HomeInfoResolve }   from './home-resolve.service';
@NgModule({
    imports: [
        RouterModule.forChild([

            { path: 'home',component: HomeComponent,
                resolve: {
                    infos: HomeInfoResolve
                },
                children: [
                    {
                        path: '',
                        component: InfoListComponent
                    },
                    {
                        path: 'infos',
                        component: InfoListComponent
                    },
                    {
                        path: 'info/:id',
                        component: InfoDetailComponent
                    },
                    {
                        path: 'help',
                        component: InfoHelpComponent
                    }

                ]
            },
            { path: '',redirectTo: '/home/infos', pathMatch: 'full'}
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        HomeInfoResolve
    ]
})
export class HomeRoutingModule { }
