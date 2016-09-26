import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BuildingService} from './building.service';

@Component({
    selector: 'app-root',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.scss'],
    providers: [BuildingService],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    title = 'app works!';
    buildings:any[];
    selectedArea:any[];
    //selectedAreaId: number;

    constructor(private buildingService:BuildingService) {

    }

    ngOnInit() {
        this.getBuildings();
    }

    getBuildings() {
        this.buildingService.getItems()
            .subscribe(
                items => {
                this.buildings = items
            });
    }

    areaChange(event) {
        this.getAreas(event.value)
    }

    getAreas(id) {
        this.selectedArea = this.buildings.find((b)=> b.id == id).children;
    }

}
