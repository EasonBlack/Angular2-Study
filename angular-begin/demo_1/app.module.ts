import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent, MyDivComponent}   from './app.component';
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, MyDivComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}