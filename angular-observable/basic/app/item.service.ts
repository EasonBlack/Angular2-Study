import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { ITEM }           from './item';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class ItemService {
  constructor (private http: Http) {}
  private itemsUrl = 'data/data.json';  // URL to web API

  getItems(): Observable<ITEM[]> {
    return this.http.get(this.itemsUrl)
      .map((res: Response)=> {
        console.log(res);
        console.log(res.json());
        return res.json()
      })
  }

}
