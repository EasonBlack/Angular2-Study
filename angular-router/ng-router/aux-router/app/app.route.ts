import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent, outlet: 'aux'},
    {path: '', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
