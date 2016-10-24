import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {ItemsComponent} from './items.component';
import {ItemComponent} from './item.component';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}