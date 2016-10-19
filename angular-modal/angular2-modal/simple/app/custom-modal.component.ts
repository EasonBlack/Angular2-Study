import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class CustomModalContext extends BSModalContext {

}

@Component({
    selector: 'modal-content',
    styles: [`
        .custom-modal-container {
            padding: 15px;
        }
        .custom-modal-header {
            background-color: #219161;
            color: #fff;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            margin-top: -15px;
            margin-bottom: 40px;
        }
    `],
    templateUrl: 'custom-modal.template.html'
})
export class CustomModal implements CloseGuard, ModalComponent<CustomModalContext> {
    context: CustomModalContext;

    constructor(public dialog: DialogRef<CustomModalContext>) {
        this.context = dialog.context;
    }

    onClose() {
        this.dialog.close();
    }

}
