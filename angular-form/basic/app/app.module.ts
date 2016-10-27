import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { AppFormComponent} from './app-form.component';
import { AppListComponent} from './app-list.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        AppFormComponent,
        AppListComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}