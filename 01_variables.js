"use strict";
// string
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Khushi";
var myNum = 7;
// nyNum.toUpperCase()
greetings.toLowerCase();
console.log(greetings);
// number - contains all the int and float in js
// not a good practice
// let userId : number = 76558.08
var userId = 2345.67; // type inference
// userId = "Khushi"        // cannot assign string now to it after assigning a number
console.log(userId.toPrecision(4));
// boolean 
var isLoggedIn = false;
isLoggedIn.valueOf;
// any
// let hero;
var hero;
function getHero() {
    return "Thor";
}
hero = getHero();
