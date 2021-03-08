var object = {"a1": { "b1": { "c1": "d1" }}};

console.log("Result at 'a1.b1.c1': ",_.get(object, 'a1.b1.c1')); // _.get is from package lodash.js
console.log("Result at 'a1.b1.nonexistent key': ",_.get(object, 'a1.b1.nonexistent', "default result")); // The default value is returned if the key / path cannot be found. If you don't supply a default value undefined is returned instead. 

var object2 = {"x1":{"y1":{"z1":"a1"}}};
console.log("Result at 'x1.y1.z1': ",_.get(object2, 'x1.y1.z1')); // outputs a1
