
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';
import { GuardComponent} from './guard/guard.component';
import { ErrorComponent} from './error/error.component';
import { AppAuthGuard } from '../service/guard.service'


const routes: Routes = [
    { path: 'about',component: AboutComponent },
    { path: 'guard',component: GuardComponent, canActivate: [AppAuthGuard], }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        AppAuthGuard
    ]
})
export class AppRoutingModule { }
