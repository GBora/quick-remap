'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cloneDeep = function (obj) { return JSON.parse(JSON.stringify(obj)); };
var simpleMapping = function (source, keysToRename, keysToSkip) {
    var newObj = {};
    var rawKeys = Object.keys(source);
    var keys;
    if (keysToSkip && keysToSkip.length) {
        keys = rawKeys.filter(function (key) { return keysToSkip.indexOf(key) === -1; });
    }
    else
        (keys = rawKeys);
    keys.forEach(function (key) {
        if (keysToRename[key]) {
            newObj[keysToRename[key]] = cloneDeep(source[key]);
        }
        else
            (newObj[key] = cloneDeep(source[key]));
    });
    return newObj;
};

exports.simpleMapping = simpleMapping;
