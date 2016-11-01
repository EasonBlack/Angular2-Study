import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'image-group-list',
    template: `
    <ul class="image-group__list">
       <li class="image-group__image_item" *ngFor="let m of image_list" (click)="selectIt(m)">
            <img src="{{m}}"/>
       </li>
       <li class="image-group__button_item">
            <a class="image-group__button_add">
               <span class="glyphicon glyphicon-plus"></span>
            </a> 
            <input  accept="image/*" type="file"  (change)="addImage($event)"/>
      </li>
    </ul>
    `
})
export class ImageGroupListComponent {
    @Input() image_list:any[];
    @Output() addImageList = new EventEmitter();
    @Output() selectImage = new EventEmitter();
    constructor() {

    }

    addImage($event:any): void {
        console.log($event.target.files[0]);
        var reader = new FileReader();
        reader.readAsDataURL($event.target.files[0]);
        reader.onload = (()=> {
            //this.image_list.push(reader.result);
            this.addImageList.emit({img: reader.result});
        });
    }

    selectIt(m: any):void {
        this.selectImage.emit({img: m});
    }
}