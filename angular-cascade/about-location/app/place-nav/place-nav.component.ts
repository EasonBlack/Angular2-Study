import {Component,  Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {LOCATION} from '../common/location';

@Component({
    selector: 'place-nav',
    templateUrl: './app/place-nav/place-nav.component.html',
    styleUrls: ['./app/place-nav/place-nav.component.scss'],
    encapsulation: ViewEncapsulation.Native
})
export class PlaceNavComponent {
    @Input() buildings;
    @Output() areaChange = new EventEmitter();
    placeSelected: number;

    constructor() {

    }

    areaSelect(id) {
        this.placeSelected = id;
        this.areaChange.emit({value: id});
    }

}
