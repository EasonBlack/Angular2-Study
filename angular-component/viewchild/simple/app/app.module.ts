import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ViewInfoComponent } from './child.component';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        ViewInfoComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}