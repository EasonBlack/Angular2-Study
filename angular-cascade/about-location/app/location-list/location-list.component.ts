import {Component,  Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'location-list',
    templateUrl: './app/location-list/location-list.component.html',
    styleUrls: ['./app/location-list/location-list.component.scss']
})
export class LocationListComponent {
    @Input() areas;
    areaSelected: number;
    constructor() {

    }

    areaSelect(id) {
        this.areaSelected = id;
    }

}