import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {FormsModule} from "@angular/forms";
import {AboutTwoPipe, FilterTwoPipe, FilterTwoImpurePipe} from './custom.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        AboutTwoPipe,FilterTwoPipe,FilterTwoImpurePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}