var common = require('../common');


const tpl = (name) => {
    let modulesUpper = common.joinHyphen(name);
    return `
import {Component} from '@angular/core';

@Component({
    template: '<div>This is ${modulesUpper} View</div>'
})
export class ${modulesUpper}Component  {
}`
}
module.exports = tpl;
