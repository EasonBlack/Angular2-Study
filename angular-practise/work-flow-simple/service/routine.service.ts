import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class RoutineService {
    constructor(private http: Http) {
    }

    getRoutines(typeId: number): Observable<any[]> {
        return this.http.get('/data/routine.json')
            .map((res: Response) => {
                let _res = res.json() as any[];
                _res = _res.filter((r)=> typeId ? r.type == typeId : true);
                return _res
            })
    }
}