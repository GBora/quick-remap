const cloneDeep = (obj: any) => JSON.parse(JSON.stringify(obj));

export const simpleMapping = (source: any, keysToRename: any, keysToSkip: string[]): any => {
    let newObj: any = {};
    let rawKeys = Object.keys(source);
    let keys;

    if (keysToSkip && keysToSkip.length) {
        keys = rawKeys.filter((key) => keysToSkip.indexOf(key) === -1);
    } else (
        keys = rawKeys
    )

    keys.forEach((key) => {
        if (keysToRename[key]) {
            newObj[keysToRename[key]] = cloneDeep(source[key]);
        } else (
            newObj[key] = cloneDeep(source[key])
        )
    })

    return newObj;
}