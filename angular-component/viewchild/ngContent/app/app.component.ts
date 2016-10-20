import {Component, ViewChild} from '@angular/core';
import { ViewInfoComponent } from './child.component';
@Component({
    selector: 'my-app',
    template: `
    <div>This is My App</div>
  
    <view-info (click)="update()">
        <div id="view-title">
          <small>This is Title</small>
        </div>
        <view-footer></view-footer>
    </view-info>
    `
})
export class AppComponent {
    @ViewChild(ViewInfoComponent) viewInfo: ViewInfoComponent
    constructor() {

    }

    update(){
        alert(this.viewInfo.sendData());
    }
}