import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent} from './home.component';
import { InfoListComponent }    from './info-list/info-list.component';
import { InfoDetailComponent }  from './info-detail/info-detail.component';

@NgModule({
    imports: [
        RouterModule.forChild([

            { path: 'home',component: HomeComponent,
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
                    }

                ]
            },
            { path: '',component: HomeComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }
