import {Component, Input} from '@angular/core';
@Component({
    selector: 'image-group-display',
    template: `
    <div class="image-group__select-container">
       <img src="{{selectImage || '../../images/t2.png'}}" />
    </div>
    `
})
export class ImageGroupDisplayComponent {
    @Input() selectImage:any;
    constructor() {

    }
}