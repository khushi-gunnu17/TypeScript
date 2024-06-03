"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Identity(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
Identity(3, { connection: "test", username: "test", password: "test" });
// generic class
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (products) {
        this.cart.push(products);
    };
    return Sellable;
}());
