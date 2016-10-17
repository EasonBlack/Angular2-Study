import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    templateUrl: 'home.template.html'
})
export class HomeComponent implements OnInit {

    infos: any[]

    constructor(private route: ActivatedRoute,
                private router: Router) {
    }

    onSelect(info: any) {
        this.router.navigate(['info', info.id], {relativeTo: this.route});
    }

    ngOnInit() {
        this.route.data.forEach((data: {infos: any[]}) => {
            this.infos = data.infos;
        });
    }
}