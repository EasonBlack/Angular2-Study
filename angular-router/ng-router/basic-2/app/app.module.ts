import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app.route';

import { HomeModule } from './home/home.module';

import { AboutComponent} from './about/about.component';
import { ErrorComponent} from './error/error.component';



@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        ErrorComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}