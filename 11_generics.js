"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = [];
var names = [];
function IdentityOne(value) {
    return value;
}
// any should not be used much as it doesn't provide any type safety 
function IdentityTwo(val) {
    return val;
}
// Generics = enables developers to write reusable and type-safe code
// now this function can be either used for number, string or any data type 
function IdentityThree(args) {
    return args;
}
// a number will be returned as an output
IdentityThree(3);
// a string will be returned as a output
IdentityThree("6");
// a boolean will be returned as a output here
IdentityThree(true);
// T here, needs to be referenced with the same word or letter
function IdentityFour(val) {
    return val;
}
IdentityFour({ brand: "Milton", type: 123 });
// generics in array
function getSearchProducts(products) {
    // doing some database operations
    var myIndex = 3;
    return products[myIndex];
}
// generics in arrow function;  <T,> = generic tag
var getMoreSearchProdcts = function (products) {
    // doing some database operations
    var myIndex = 4;
    return products[myIndex];
};
// normal data type in array 
var getProducts = function (products) {
    // doing some database operations
    var myIndex = 4;
    return products[myIndex];
};
