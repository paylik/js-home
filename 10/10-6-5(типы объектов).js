var typer = (function(TO_BE_DEFINED_BY_YOU) {

    return {
        isNumber: function (x) {return typeof x != 'undefined' && typeof x.valueOf() == 'number' && !isNaN(x.valueOf())},
        isString: function (x) {return typeof x != 'undefined' && typeof x.valueOf() == 'string'},
        isArray: function (x) {return x instanceof Array},
        isFunction: function (x) {return typeof x == 'function'},
        isDate: function (x) {return x instanceof Date},
        isRegExp: function (x) {return x instanceof RegExp},
        isBoolean: function (x) {return typeof x != 'undefined' && typeof x.valueOf() == 'boolean'},
        isError: function (x) {return x instanceof Error},
        isNull: function (x) {return x === null},
        isUndefined: function (x) {return typeof x == 'undefined'},
    };
}(null));

// Your task will be to create a basic type-checker "framework/api"
// for JavaScript (or for Ruby). Let's call it typer.js (ruby Typer class).
// Your API must contain the following methods: