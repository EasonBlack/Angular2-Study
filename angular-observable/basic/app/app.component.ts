import {Component, OnInit} from '@angular/core';
import {ItemService} from './item.service';
import {ITEM} from './item';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [ItemService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  errorMessage: string;
  items: ITEM[];

  constructor(private itemService: ItemService) {

  }

  ngOnInit() { this.getItems(); }

  getItems() {
    this.itemService.getItems()
      .subscribe(
        items => this.items = items,
        error =>  this.errorMessage = <any>error);
  }
}
