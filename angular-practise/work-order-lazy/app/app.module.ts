import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {routing}  from './app.route';
import {AppComponent} from './app.component';
import {DefaultComponent} from './default.component';


@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        DefaultComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}