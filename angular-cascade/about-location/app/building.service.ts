import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class BuildingService {
    constructor(private http:Http) {
    }

    private itemsUrl = 'data/building.json';

    getItems():Observable<any[]> {
        return this.http.get(this.itemsUrl)
            .map((res:Response)=> {
                return res.json()
            })
    }
}