import { Injectable }             from '@angular/core';
import { Router, Resolve,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Info } from './home';
@Injectable()
export class HomeInfoResolve implements Resolve<Info[]> {
    constructor(private http:Http) {
    }

    resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<Info[]> {
        return this.http.get('/data/data.json')
            .map((res:Response) => {
                let body = res.json();
                return body;
            })

    }
}