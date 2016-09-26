import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PlaceNavComponent} from './place-nav/place-nav.component';
import {LocationListComponent} from './location-list/location-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceNavComponent,
    LocationListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
