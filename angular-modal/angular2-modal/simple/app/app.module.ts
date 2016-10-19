import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { CustomModal } from './custom-modal.component';


@NgModule({
    imports: [
        BrowserModule,
        ModalModule.forRoot(),
        BootstrapModalModule
    ],
    declarations: [
        AppComponent,
        CustomModal
    ],
    bootstrap: [ AppComponent ],
    entryComponents: [ CustomModal ]
})
export class AppModule {
}