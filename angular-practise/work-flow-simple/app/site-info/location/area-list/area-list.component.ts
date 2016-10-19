import {Component, ViewContainerRef} from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import {Modal, BSModalContext} from 'angular2-modal/plugins/bootstrap';
import { AreaAddModalContext, AreaAddModal } from '../area-add/area-add.component';

@Component({
    selector: 'location-area-list',
    templateUrl: 'area-list.template.html'
})
export class LocationAreaListComponent {
    constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
        overlay.defaultViewContainer = vcRef;
    }

    showAreaAddModal() {
        return this.modal.open(AreaAddModal,  overlayConfigFactory({}, BSModalContext));
    }
}