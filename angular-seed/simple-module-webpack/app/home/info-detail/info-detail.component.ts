import {Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
    selector: 'home-info-detail',
    template: `
    <div>This is Info Detail</div>
    <div>{{content}}</div>
    `
})
export class InfoDetailComponent implements OnInit {
    content:string;

    constructor(private route:ActivatedRoute,
                private router:Router) {
    }

    ngOnInit() {
        this.route.params.forEach((params:Params) => {
            let id = +params['id'];
            this.content = 'info ' + id;
        });
    }
}