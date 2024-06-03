"use strict";
// In the case of functions type anotations is necessary, but in the case of variables it is not necessary.
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase()
    return num + 2;
    // return "hello"
}
var myValue = addTwo(7);
console.log(myValue);
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper("khushi"));
function signUpUser(name, email, password, isPaid) { }
signUpUser("Khushi", "khushi@gmail.com", 12345, true);
// default value in the function
var loginUser = function (name, email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("k", "k@k.com", 4567);
// function with more than one return type
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 ok";
}
var getHello = function (s) {
    return "";
};
var heroes = ['Thor', 'spiderman', 'ironman'];
// const heroes = [1, 2, 3]
console.log(heroes.map(function (hero) {
    return "hero is ".concat(hero, ".");
}));
function consoleError(errormsg) {
    console.log(errormsg);
}
// never is specifically made so that you can handle the error 
function handleError(errormsg) {
    // Throwing the error means this function will never reach the end and return.
    throw new Error(errormsg);
}
// try {
//     handleError("Name Error")
// } catch (error) {
//     console.log(error)
// }
// rest parameters
function add(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
var negateFunction = function (value) { return value * -1; };
console.log(negateFunction(10));
