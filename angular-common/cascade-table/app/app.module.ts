import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpModule} from '@angular/http';
import {AppComponent}   from './app.component';
import {GroupComponent} from './group/group.component';
import {GroupTableComponent} from './group/group-table.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        GroupComponent,
        GroupTableComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}