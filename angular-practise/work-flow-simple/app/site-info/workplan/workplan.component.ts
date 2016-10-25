import {Component, OnInit} from '@angular/core';
import {RoutineService} from '../../../service/routine.service';

@Component({
    templateUrl: 'workplan.template.html',
    providers: [RoutineService]
})
export class WorkPlanComponent implements OnInit {
    public headers: any[];
    public routines: any[];
    public tabActive: number = 0;

    constructor(private routineService: RoutineService) {
        this.headers = [
            {name: 'id', title: 'Num.', order: false},
            {name: 'name', title: 'Name', order: false},
            {name: 'type', title: 'Type', order: false}
        ]
    }

    ngOnInit() {
        this.getRoutines(0);
    }

    selectTab(typeId: number) {
        this.getRoutines(typeId);
        this.tabActive = typeId;
    }

    getRoutines(typdId: number) {
        this.routineService.getRoutines(typdId)
            .subscribe(results => {
                this.routines = results;
            });
    }

}