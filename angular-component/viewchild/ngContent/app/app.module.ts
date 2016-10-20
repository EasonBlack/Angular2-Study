import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ViewInfoComponent } from './child.component';
import { ViewFooterComponent } from './child-footer.component';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        ViewInfoComponent,
        ViewFooterComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}