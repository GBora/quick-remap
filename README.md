# quick-remap

A simple mapping library for when you just need to do a quick renaming of certain fields on objects, while leaving everything else as is.

The only export of the library is the function `quickMapping` which has the following header:

`quickMapping = (source: any, keysToRename: any, keysToSkip?: string[]): any`

`keysToRename`: a simple object which has as it's keys the key in the source object you want to remap and the value for the key the new name.

`keysToSkip`: an optional array for keys you just want to skip.

## Example

A basic example

```
let source = { name: "John", lastName: "Smith", "clientId": 1 };
let final = quickMapping(source, {"name":"firstName"});
console.log(final); // { firstName: "John", lastName: "Smith", "clientId": 1 };
```

A basic example with deletion

```
let source = { name: "John", lastName: "Smith", "clientId": 1 };
let final = quickMapping(source, {"name":"firstName"}, ["clientId"]);
console.log(final); // { firstName: "John", lastName: "Smith" };
```

A basic example with arrays

```
    let source = [{ name: "John", lastName: "Smith", "clientId": 1 }, { name: "George", lastName: "Smith", "clientId": 2 }];
    let final = source.map(c => quickMapping(c, {"name":"firstName"}))
```
## Important

The function will do a deep copy of the object, the library has been tested in the context of typescript and node, not plain javascript directly in the browser
