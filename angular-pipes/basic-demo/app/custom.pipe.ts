import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'abouttwo'})
export class AboutTwoPipe implements PipeTransform {
    transform(value:number, exponent:string):number {
        return value * exponent
    }
}

@Pipe({name: 'filtertwo'})
export class FilterTwoPipe implements PipeTransform {
    transform(items:Number[]) {
        return items.filter(o=>o % 2 == 0);
    }
}

@Pipe({name: 'filtertwoImpure', pure: false})
export class FilterTwoImpurePipe extends FilterTwoPipe {

}