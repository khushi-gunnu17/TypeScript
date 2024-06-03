"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Khushi",
    email: "khushi@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser({name : "Khushi", isPaid : false, email : "Khushi@gmail.com"})
createUser({ name: "Khushi", isPaid: false });
// odd behaviour, here you can pass one more options into the calling function
function createNewUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Khushi", isPaid: false, email: "Khushi@gmail.com" };
createNewUser(newUser);
function createCourse() {
    return { name: "Python", price: 10000 };
}
function getUser(user) {
    return { name: "", email: "", isActive: true };
}
getUser({ name: "", email: "", isActive: true });
var myUser = {
    _id: "12345abc",
    name: "Khushi",
    email: "khushi@k.com",
    isActive: false
};
myUser.email = "khushi@gmail.com";
