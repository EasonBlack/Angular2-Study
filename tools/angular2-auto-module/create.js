var fs = require('fs');
var path = require('path');
var moduleTpl = require('./template/moduleTpl');
var routeTpl = require('./template/routeTpl');

var controllerTpl = require('./template/controllerTpl')
var templateTpl = require('./template/templateTpl')
var componentTpl = require('./template/componentTpl')


module.exports = {
    createModule: function(folder, name, modules) {
        var streamTpl = fs.createWriteStream(path.join(folder, name+".component.ts"));
        var content = moduleTpl(name, modules);
        // streamTpl.once('open', function (fd) {
        //     streamTpl.write(content);
        //     streamTpl.end();
        // });
    },
    createRoute: function(folder, name, modules){
        var streamTpl = fs.createWriteStream(path.join(folder, name+".route.ts"));
        var content = routeTpl(name, modules);
        console.log(content);
    }
    // createTemplate: function (folder, name) {
    //     var streamTpl = fs.createWriteStream(path.join(folder, name+".component.template.html"));
    //     var _name = recodeName(name);
    //     var content = templateTpl(name);
    //     streamTpl.once('open', function (fd) {
    //         streamTpl.write(content);
    //         streamTpl.end();
    //     });
    // },
    // createController : function(folder,name) {
    //     var streamCtrl = fs.createWriteStream(path.join(folder, name+".component.ctrl.js"));
    //     var _name = recodeName(name);
    //     var classSection = controllerTpl(_name);
    //     streamCtrl.once('open', function (fd) {
    //         streamCtrl.write(classSection);
    //         streamCtrl.end();
    //     });
    // },
    //
    // createComponent: function(folder,name) {
    //     var streamCom = fs.createWriteStream(path.join(folder, name+".component.js"));
    //     var _name = recodeName(name);
    //     var ComSection = componentTpl(name, _name);
    //     streamCom.once('open', function (fd) {
    //         streamCom.write(ComSection);
    //         streamCom.end();
    //     });
    // }
}