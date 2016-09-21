import {Component, Input} from "@angular/core";
@Component({
    selector: 'search-box',
    templateUrl: './app/search-box/search-box.component.tpl.html'
})
export class SearchBoxComponent {
    @Input('myplaceholder')
    text = 'xxxxxx';

    clear() {
        
    }
}