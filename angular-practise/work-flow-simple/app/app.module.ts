import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app.route';
import { HomeModule } from './home/home.module';
import { SiteInfoModule } from './site-info/site-info.module';

import { AnalyticsComponent} from './analytics/analytics.component';
import { SiteListComponent} from './site-list/site-list.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        SiteInfoModule
    ],
    declarations: [
        AppComponent,
        SiteListComponent,
        AnalyticsComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}