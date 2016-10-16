var fs = require('fs');
var path = require('path');
var prompt = require('prompt');
var create = require('./create');

prompt.start();
prompt.get(['module','components'], function (err, result) {
    var module = result.module;
    var [...components] =  result.components.split(',');

    var folder = path.join(__dirname, module);
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
        // create.createTemplate(folder, result.name);
        // create.createController(folder, result.name);
        // create.createComponent(folder, result.name);
    }
    create.createModule(folder, module, components);
    create.createRoute(folder, module, components);
});
