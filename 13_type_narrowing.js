"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// typeof = type guard
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide an id");
        return;
    }
    id.toLowerCase();
}
// example from documentation
function printAll(strs) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
// instanceof
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// instead of returning it as a boolean, we can type cast it to pet is Fish
function isFish(pet) {
    return pet.swim !== undefined;
}
function getfood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "Bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    // return shape.side * shape.side
}
// the never type is supposed to be never checking
function getArea(shape) {
    switch (shape.kind) {
        case "circle": return Math.PI * Math.pow(shape.radius, 2);
        case "square": return shape.side * shape.side;
        case "rectangle": return shape.length * shape.width;
        default:
            var _defaultForShape = shape;
            return _defaultForShape;
    }
}
