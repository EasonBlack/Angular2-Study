import {Component} from '@angular/core';
@Component({
    selector: 'image-group',
    template: `
    <div class="image-group__container">
        <image-group-display [selectImage]="image_selected"></image-group-display>
        <image-group-list (addImageList)="addImageList($event);" (selectImage)="selectImage($event)" [image_list]="image_list" ></image-group-list>
    </div>
    `
})
export class ImageGroupComponent {
    public image_list:any[]=[];
    public image_selected:any = '';
    constructor() {
    }

    addImageList(event:any){
        this.image_list.push(event.img)
    }
    selectImage(event:any) {
        this.image_selected = event.img;
    }
}