import {Component, OnInit} from '@angular/core';
import {SiteService} from '../../service/site.service';
import {Site} from '../../model/site.model';

@Component({
    templateUrl: 'site-list.template.html',
    providers: [SiteService]
})
export class SiteListComponent implements OnInit {

    sites: Site[];
    siteFilterName: string = '';

    constructor(private siteService: SiteService) {
    }

    ngOnInit() {
        this.getSites();
    }

    getSites() {
        this.siteService.getSites()
            .subscribe(sites => {
                this.sites = sites;
            });
    }
}