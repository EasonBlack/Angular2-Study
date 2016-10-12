import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app.route';
import { HttpModule, RequestOptions } from '@angular/http';
import { HomeModule } from './home/home.module';

import { AboutComponent} from './about/about.component';
import { GuardComponent} from './guard/guard.component';
import { ErrorComponent} from './error/error.component';

import {CustomRequestOptions } from '../service/custom-request';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        GuardComponent,
        ErrorComponent
    ],
    providers : [
        {provide: RequestOptions, useClass: CustomRequestOptions}
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}