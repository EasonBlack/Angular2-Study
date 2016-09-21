import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {SearchBoxComponent}   from './search-box/search-box.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [AppComponent, SearchBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}