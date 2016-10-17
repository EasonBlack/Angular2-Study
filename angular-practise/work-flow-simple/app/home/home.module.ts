import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HomeRoutingModule } from './home.route';
import { HomeComponent} from './home.component';
import { InfoListComponent }    from './info-list/info-list.component';
import { InfoDetailComponent }  from './info-detail/info-detail.component';
import { InfoHelpComponent }  from './info-help/info-help.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        InfoListComponent,
        InfoDetailComponent,
        InfoHelpComponent
    ]
})
export class HomeModule {}