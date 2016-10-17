var common = require('../common');


const tpl = (name) => {
    let nameUpper = common.firstLetterUp(name);
    return `
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    templateUrl: '${name}.template.html'
})
export class ${nameUpper}Component  {
}`
}
module.exports = tpl;