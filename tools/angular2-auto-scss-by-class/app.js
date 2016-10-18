var fs = require('fs');
var path = require('path');
var prompt = require('prompt');
var _regex = /class=["']([\w_-]+)["']/g;
var match;

prompt.start();
prompt.get(['name'], function (err, result) {
    var files = {};
    var classes = [];
    var _t = fs.readFileSync(`./source/${result.name}.html`, "utf-8");
    while ((match = _regex.exec(_t)) !== null) {
        classes.push(match[1]);
    }
    classes.forEach((o)=> {
        let _file = '';
        (o.indexOf('_') > 0) && (_file = o.split('_')[0] );
        if (_file && !files[_file]) {
            files[_file] = [];
        }
        if (_file) {
            files[_file].push(o);
        }
    });

    var folder = path.join(__dirname, 'style');
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }

    for (let key in files) {
        var values = files[key];
        let streamTpl = fs.createWriteStream(path.join(folder, `_components.${key}.scss`));
        let content = '';
        values.forEach(t=> {
            content += `\n.${t}{}`
        })
        streamTpl.once('open', function (fd) {
            streamTpl.write(content);
            streamTpl.end();
        })
    }

})


