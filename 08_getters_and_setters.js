"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = 'Jaipur';
    }
    // private methods
    User.prototype.deleteToken = function () {
        console.log("Token deleted");
    };
    Object.defineProperty(User.prototype, "getAppleEmail", {
        // getter
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        // getter for private variable
        get: function () {
            return this._courseCount;
        },
        // setter
        // There are no return types in setter
        set: function (courseNumber) {
            if (courseNumber <= 1) {
                throw new Error("Course count should be more than 1.");
            }
            this._courseCount = courseNumber;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var Gunnu = new User("k@k.com", "Gunnu", "123abc");
