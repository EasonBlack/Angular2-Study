import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
    selector: 'about',
    template: `
    <h3>
      This is About  {{id}}
    </h3>
  `
})
export class AboutComponent implements OnInit {
    public id: string = 'default';

    constructor(private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.id = params['id'];
        });
    }
}