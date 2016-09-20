import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { InfoComponent } from './info.component';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        InfoComponent
    ],
    exports:   [ HomeComponent,AboutComponent ],
    bootstrap: [ HomeComponent ]
})
export class HomeModule {
}