"use strict";
// public, private and protected = access modifiers
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = 'Jaipur';
        this.email = email;
        this.name = name;
    }
    return User;
}());
var khushi = new User("khushi@gmail.com", "khushi");
// khushi.city         // private
// khushi.name         // private
// #private in javascript and no private keyword there
var NewUser = /** @class */ (function () {
    function NewUser(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = 'Jaipur';
    }
    return NewUser;
}());
var Gunnu = new NewUser("k@k.com", "Gunnu", "123abc");
