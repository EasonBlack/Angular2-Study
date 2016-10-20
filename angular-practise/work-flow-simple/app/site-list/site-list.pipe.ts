import { Pipe, PipeTransform } from '@angular/core';
import { Site } from '../../model/site.model'

@Pipe({name: 'sitefilter'})
export class SiteFilterPipe implements PipeTransform {
    transform(items:Site[], exponent: string){
        if(!items) return ;
        return items.filter(o => o.name.indexOf(exponent)!=-1)
    }
}
