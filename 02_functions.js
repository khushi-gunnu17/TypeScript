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
heroes.map(function (hero) {
    return "hero is ".concat(hero, ".");
});
function consoleError(errormsg) {
    console.log(errormsg);
}
// never is specifically made so that you can handle the error 
function handleError(errormsg) {
    throw new Error(errormsg);
}
