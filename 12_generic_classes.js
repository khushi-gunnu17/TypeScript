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
var NamedValue = /** @class */ (function () {
    function NamedValue(name) {
        this.name = name;
    }
    NamedValue.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue.prototype.getValue = function () {
        return this._value;
    };
    NamedValue.prototype.toString = function () {
        return "".concat(this.name, " : ").concat(this._value);
    };
    return NamedValue;
}());
var value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber : 10
var wrappedValue = { value: 10 };
