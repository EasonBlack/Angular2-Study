import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyColorDirective } from './app.directive';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        MyColorDirective
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}