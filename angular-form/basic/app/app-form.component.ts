import {Component, Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'app-form',
    templateUrl: 'app-form.template.html'
})
export class AppFormComponent {
    @Output() modelSubmit = new EventEmitter();

    public model: any = {};
    public types: any[] = [
        {id: 1, title: 'clean'},
        {id: 2, title: 'maintain'},
        {id: 3, title: 'check'}
    ]

    constructor() {
    }

    onSubmit() {
        let item = Object.assign({}, this.model);
        this.modelSubmit.emit({model: item});
    }
}