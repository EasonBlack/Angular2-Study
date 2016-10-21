import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {AppRoutingModule} from './app.route';
import { AppComponent }   from './app.component';
import { AppItemComponent }   from './item/item.component';
import {View1Component} from './page/view1.component';
import {View2Component} from './page/view2.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AppItemComponent,
        View1Component,
        View2Component
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}