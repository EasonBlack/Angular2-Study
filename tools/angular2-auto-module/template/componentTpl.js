const tpl = (name1,name2) =>`
import controller from './${name1}.component.ctrl.js';
import template from './${name1}.component.tpl.html';

let ${name2}Component = {
    controller,
    template
}

export default ${name2}Component;`

module.exports = tpl;