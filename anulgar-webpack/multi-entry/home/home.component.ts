import {Component} from '@angular/core';

import { InfoComponent } from './info.component'

@Component({
    selector: 'my-home',
    template: `<div>This is my Home</div><my-info></my-info>`
})
export class HomeComponent {

}