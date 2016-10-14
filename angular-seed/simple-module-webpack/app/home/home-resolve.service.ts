import { Injectable }             from '@angular/core';
import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class HomeInfoResolve implements Resolve<any[]> {
    constructor(private http:Http) {
    }

    resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<any[]> {
        return this.http.get('/data/data.json')
            .map((res:Response) => {
                let out = res.json();
                return out;
            })
    }
}