import {Component, Input, Output, EventEmitter, ViewChild, ElementRef} from "@angular/core";
@Component({
    selector: 'search-box',
    templateUrl: './app/search-box/search-box.component.tpl.html'
})
export class SearchBoxComponent {
    @Input('myplaceholder') text:String;
    @Output() valueChange = new EventEmitter();
    @ViewChild('myinput') input;
    constructor() {}

    clear(input) {
        input.value = "";
    }

    inputChange(value) {
        console.log(value);
        this.valueChange.emit({value: value});
    }

    ngAfterViewInit() {
        console.log(this.input.nativeElement);
    }
}