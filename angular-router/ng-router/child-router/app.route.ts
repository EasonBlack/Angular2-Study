import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';
import { AboutInfoComponent} from './about/about-info.component';
import { AboutHelpComponent} from './about/about-help.component';


const appRoutes:Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {
        path: 'about',
        component: AboutComponent,
        children: [
            {
                path: '',
                component: AboutInfoComponent
            },
            {
                path: 'info',
                component: AboutInfoComponent
            },
            {
                path: 'help',
                component: AboutHelpComponent
            }

        ]
    }

];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });