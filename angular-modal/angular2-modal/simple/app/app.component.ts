import {Component, ViewContainerRef} from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import {Modal, BSModalContext} from 'angular2-modal/plugins/bootstrap';
import { CustomModalContext, CustomModal } from './custom-modal.component';

@Component({
    selector: 'my-app',
    template: ` <button (click)="onClick()">Alert</button>
                 <button (click)="onClick2()">Alert2</button>`
})
export class AppComponent {
    constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
        overlay.defaultViewContainer = vcRef;
    }

    onClick() {
        this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
            .open();
    }

    onClick2() {
        return this.modal.open(CustomModal,  overlayConfigFactory({}, BSModalContext));
    }
}