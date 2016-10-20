import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Site } from '../model/site.model';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class SiteService {
    constructor(private http:Http) {
    }

    getSites():Observable<Site[]>  {
        return this.http.get('/data/sites.json')
            .map((res:Response) =>  res.json())
    }
}