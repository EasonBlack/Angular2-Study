var common = require('../common');


const tpl = (name, modules) => {
    let nameUpper = common.firstLetterUp(name);
    let modulesImport = '';
    modules.forEach((m)=> {
        let modulesUpper = common.joinHyphen(m);
        modulesImport += `
import { ${modulesUpper}Component }    from './${m}/${m}.component';`
    })
    let modulesDeclare = '';
    modules.forEach((m)=> {
        let modulesUpper = common.joinHyphen(m);
        modulesDeclare += `
        ${modulesUpper}Component,`
    })

    return `
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ${nameUpper}RoutingModule } from './${name}.route';
import { ${nameUpper}Component} from './${name}.component';
${modulesImport}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ${nameUpper}RoutingModule
    ],
    declarations: [
        ${nameUpper}Component,
        ${modulesDeclare}
    ]
})
export class  ${nameUpper}Module {}
`
}


module.exports = tpl;