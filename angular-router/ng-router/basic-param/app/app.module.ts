import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {AppComponent}   from './app.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from './app.route';
import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}