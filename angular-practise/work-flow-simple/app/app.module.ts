import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {AppComponent}   from './app.component';
import {AppRoutingModule} from './app.route';
import {HomeModule} from './home/home.module';
import {SiteInfoModule} from './site-info/site-info.module';

import {AnalyticsComponent} from './analytics/analytics.component';
import {SiteListComponent} from './site-list/site-list.component';
import {SiteFilterPipe} from './site-list/site-list.pipe';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HomeModule,
        SiteInfoModule
    ],
    declarations: [
        AppComponent,
        SiteListComponent,
        AnalyticsComponent,
        SiteFilterPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}