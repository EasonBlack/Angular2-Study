import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {AppComponent}   from './app.component';
import {ImageGroupComponent} from './image-group/image-group.component'
import {ImageGroupDisplayComponent} from './image-group/image-group-display.component'
import {ImageGroupListComponent} from './image-group/image-group-list.component'


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ImageGroupComponent,
        ImageGroupDisplayComponent,
        ImageGroupListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}