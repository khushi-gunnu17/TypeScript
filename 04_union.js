"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = "khushi123";
var khushi = { name: "Khushi", id: 100 };
console.log(khushi);
khushi = {
    username: "Khushi-gunnu",
    id: 100
};
console.log(khushi);
function getDBId(id) {
    // making some api calls above this code down below
    console.log("DB id is : ".concat(id));
}
getDBId(2);
getDBId("234");
function getNewDBId(id) {
    if (typeof id === "string") {
        console.log(id.toLowerCase());
    }
}
getNewDBId("GUNNU");
// array
var data = [1, 2, 3, 4];
var data2 = ["1", "2"];
var data3 = ["1", "2", 3, true];
// literal type of assignment
var pi = 3.14;
// pi = 3.15        // cannot do this
var seatAllotment;
