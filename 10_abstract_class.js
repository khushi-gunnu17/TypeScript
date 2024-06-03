"use strict";
// interface TakePhoto {
//     cameraMode : string
//     filter : string
//     burst : number
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// interface Story {
//     createStory() : void
// }
// // implements only use for interface
// class Instagram implements TakePhoto {
//     constructor (
//         public cameraMode : string,
//         public filter : string,
//         public burst : number
//     ) {}
// }
// class Youtube implements TakePhoto, Story {
//     constructor (
//         public cameraMode : string,
//         public filter : string,
//         public burst : number,
//         public short : string
//     ) {}
//     createStory(): void {
//         console.log("Story was created.");
//     }
// }
// abstract classes are the blueprint and we cannot create objects from them.
// it is the responsibility of the class who is extending it to create an object from this class.
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    TakePhoto.prototype.getReelTime = function () {
        // some complex calculation here and then return
        return 8;
    };
    return TakePhoto;
}());
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(cameraMode, filter, burst) {
        // to access variables from the parent class, super is used
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        _this.burst = burst;
        return _this;
    }
    Instagram.prototype.getSepia = function () {
        console.log("Sepia");
    };
    return Instagram;
}(TakePhoto));
var khushi = new Instagram("test", "test", 123);
khushi.getReelTime();
