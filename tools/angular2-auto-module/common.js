module.exports = {
    firstLetterUp: function (name) {
        var [f,...rest] = name;
        return [f.toUpperCase(), ...rest].join('');
    },

    joinHyphen: function (name) {
        var [...rest] = name.split('-');
        var _rest = rest.map(r=>this.firstLetterUp(r))
        return [..._rest].join('')
    }
}