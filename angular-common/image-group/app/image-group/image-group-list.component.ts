import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'image-group-list',
    template: `
    <div class="image-group__list-container">
       <div class="image-group__more_item image-group__more_left" *ngIf="listOffset < 0" (click)="moveLeft()">
               <a class="image-group__button_more">
                  <span class="glyphicon glyphicon-menu-left"></span>
               </a>
        </div>
        <ul class="image-group__list" [ngStyle]="{'left':  listOffset * 100 + 'px'}">
           <li class="image-group__image_item" *ngFor="let m of image_list" (click)="selectIt(m)">
                <img src="{{m}}"/>
           </li>
        </ul>
        <div class="image-group__more_item image-group__more_right" *ngIf="(image_list.length + listOffset) >4" (click)="moveRight()">
               <a class="image-group__button_more">
                  <span class="glyphicon glyphicon-menu-right"></span>
               </a>
        </div>
        <div class="image-group__button_item" [ngStyle]="{'left': resetLeft()}">
          <a class="image-group__button_add">
               <span class="glyphicon glyphicon-plus"></span>
          </a> 
          <input  accept="image/*" type="file"  (change)="addImage($event)"/>
        </div>
    </div>
    `
})
export class ImageGroupListComponent {
    @Input() image_list: any[];
    @Output() addImageList = new EventEmitter();
    @Output() selectImage = new EventEmitter();
    listOffset:any = 0;
    constructor() {
    }

    resetLeft() {
        if (this.image_list.length > 4) return 400 + 'px';
        return this.image_list.length * 100 + 'px';
    }

    addImage($event: any): void {
        console.log($event.target.files[0]);
        var reader = new FileReader();
        reader.readAsDataURL($event.target.files[0]);
        reader.onload = (()=> {
            this.addImageList.emit({img: reader.result});
        });
    }

    moveLeft() {
        this.listOffset += 1;
    }

    moveRight() {
        this.listOffset += -1;
    }

    selectIt(m: any): void {
        this.selectImage.emit({img: m});
    }
}