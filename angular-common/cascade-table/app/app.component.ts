import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
    selector: 'my-app',
    template: `
    <div class="app__container">
        <app-group [groups]="groups"></app-group>
    </div>
    
    `
})
export class AppComponent implements OnInit {
    groups: any[];

    constructor(private http: Http) {

    }

    ngOnInit() {
        this.fetch().subscribe(result=> {
            this.groups = result;
        })
    }

    fetch() {
        return this.http.get('/data/group.json')
            .map((res: Response) => {
                let out = res.json();
                out.forEach(g=>g.state = 'inactive');
                return out;
            })
    }
}