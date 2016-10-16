var common = require('../common');


const tpl = (name, modules) => {
    let nameUpper = common.firstLetterUp(name);
    let modulesImport = '';
    modules.forEach((m)=> {
        let modulesUpper = common.joinHyphen(m);
        modulesImport += `
import { ${modulesUpper}Component }    from './${m}/${m}.component';`
    })
    let modulesRoute = '';
    modules.forEach((m,i)=> {
        let modulesUpper = common.joinHyphen(m);
        if(i==0) {
            modulesRoute += `
                  {
                      path: '',
                      component: ${modulesUpper}Component
                  },`
        }
        modulesRoute += `
                  {
                      path: '${m}',
                      component: ${modulesUpper}Component
                  },`
    })

    return `
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { ${nameUpper}Component} from './${name}.component';
${modulesImport}
@NgModule({
    imports: [
        RouterModule.forChild([
            { 
              path: '${name}',
              component: ${nameUpper}Component,
              children: [
                  ${modulesRoute}
              ]
            },
            { path: '',component: ${nameUpper}Component}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ${nameUpper}RoutingModule { }
`
}


module.exports = tpl;