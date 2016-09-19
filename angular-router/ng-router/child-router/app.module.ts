import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { routing}  from './app.route';
import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';
import { AboutInfoComponent} from './about/about-info.component';
import { AboutHelpComponent} from './about/about-help.component';


@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,AboutInfoComponent,AboutHelpComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}