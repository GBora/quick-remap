"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickMapping = void 0;
const lodash_1 = require("lodash");
const quickMapping = (source, keysToRename, keysToSkip) => {
    let newObj = {};
    let rawKeys = Object.keys(source);
    let keys;
    if (keysToSkip && keysToSkip.length) {
        keys = rawKeys.filter((key) => keysToSkip.indexOf(key) === -1);
    }
    else
        (keys = rawKeys);
    keys.forEach((key) => {
        if (keysToRename[key]) {
            newObj[keysToRename[key]] = (0, lodash_1.cloneDeep)(source[key]);
        }
        else
            (newObj[key] = (0, lodash_1.cloneDeep)(source[key]));
    });
    return newObj;
};
exports.quickMapping = quickMapping;
