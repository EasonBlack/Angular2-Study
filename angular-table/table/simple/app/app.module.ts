import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {AppTableComponent} from './table/table.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        AppTableComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}