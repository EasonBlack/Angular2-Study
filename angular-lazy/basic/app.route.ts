
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';

const routes: Routes = [
    { path: '',component: HomeComponent },
    { path: 'home',component: HomeComponent },
    { path: 'about', loadChildren: './about/about.module#AboutModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
