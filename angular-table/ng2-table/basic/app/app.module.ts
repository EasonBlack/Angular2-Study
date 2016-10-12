import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';


@NgModule({
    imports: [
        BrowserModule,
        Ng2TableModule
    ],
    declarations: [
        AppComponent
    ],
    providers : [
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}