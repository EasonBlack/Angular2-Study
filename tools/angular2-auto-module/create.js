var fs = require('fs');
var path = require('path');
var moduleTpl = require('./template/moduleTpl');
var routeTpl = require('./template/routeTpl');
var componentTpl = require('./template/componentTpl')
var templateTpl= require('./template/templateTpl')
var subcomponentTpl = require('./template/subcomponentTpl')


let buildFile = (fn,content) => {
    fn.once('open', function(fd) {
        fn.write(content);
        fn.end();
    })
}

module.exports = {
    createModule: function(folder, name, modules) {
        var streamTpl = fs.createWriteStream(path.join(folder, name+".module.ts"));
        var content = moduleTpl(name, modules);
        buildFile(streamTpl,content);
    },
    createRoute: function(folder, name, modules){
        var streamTpl = fs.createWriteStream(path.join(folder, name+".route.ts"));
        var content = routeTpl(name, modules);
        buildFile(streamTpl,content);
    },
    createComponent: function(folder,name) {
        var streamTpl = fs.createWriteStream(path.join(folder, name+".component.ts"));
        var content = componentTpl(name);
        buildFile(streamTpl,content);
    },
    createTemplate: function(folder,name, modules) {
        var streamTpl = fs.createWriteStream(path.join(folder, name+".template.html"));
        var content = templateTpl(name,modules);
        buildFile(streamTpl,content);
    },
    createSubComponent: function(folder,name,modules) {
        modules.forEach((m)=> {
            var subfolder = path.join(__dirname, name, m);
            if (!fs.existsSync(subfolder)) {
                fs.mkdirSync(subfolder);
            }
            var streamTpl = fs.createWriteStream(path.join(subfolder, m+".component.ts"));
            var content = subcomponentTpl(m);
            buildFile(streamTpl,content);
        });
    }
}