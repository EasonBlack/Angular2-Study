import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AnalyticsComponent} from './analytics/analytics.component';
import {SiteListComponent} from './site-list/site-list.component';

const routes: Routes = [
    {path: 'analytics', component: AnalyticsComponent},
    {path: 'sitelist', component: SiteListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
