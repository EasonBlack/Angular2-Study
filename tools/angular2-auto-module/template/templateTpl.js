var common = require('../common');


const tpl = (name, modules) => {
    let nameUpper = common.firstLetterUp(name);
    let modulesLink = '';
    modules.forEach((m,i)=> {
        let modulesUpper = common.joinHyphen(m);
        if(i==0) {
            modulesLink += `    <a routerLink="/${name}/${m}" routerLinkActive="active">${modulesUpper}</a>`
        }  else {
            modulesLink += `
        <a routerLink="/${name}/${m}" routerLinkActive="active">${modulesUpper}</a>`
        }
    })
    return `
<div>
    <nav>
    ${modulesLink}
    </nav>
</div>
<router-outlet></router-outlet>`
}
module.exports = tpl;