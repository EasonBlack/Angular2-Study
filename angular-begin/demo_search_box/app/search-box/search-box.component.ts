import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector: 'search-box',
    templateUrl: './app/search-box/search-box.component.tpl.html'
})
export class SearchBoxComponent {
    @Input('myplaceholder') text:String;
    @Output() valueChange = new EventEmitter();


    constructor() {

    }

    clear(input) {
        input.value = "";
    }

    inputChange(value) {
        console.log(value);
        this.valueChange.emit({value: value});
    }
}