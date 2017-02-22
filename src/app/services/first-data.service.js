"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FirstDataService = (function () {
    function FirstDataService() {
        this.numOfCards = 4;
    }
    FirstDataService.prototype.setNumOfCards = function (num) {
        this.numOfCards = num;
    };
    FirstDataService.prototype.getNumOfCards = function () {
        return this.numOfCards;
    };
    FirstDataService.prototype.getCards = function (n) {
        var cards = [];
        for (var i = 0; i < n; i++) {
            var temp = {
                id: i,
                content: i + 1,
                flipped: false
            };
            cards.push(temp);
            var temp = {
                id: i + n,
                content: i + 1,
                flipped: false
            };
            cards.push(temp);
        }
        return this.randomize(cards);
    };
    FirstDataService.prototype.randomize = function (array) {
        var newArray = [];
        var cols;
        if (array.length == 32)
            cols = 8;
        else
            cols = 4;
        while (array.length > 0) {
            var j = Math.floor(Math.random() * array.length);
            newArray.push(array[j]);
            array.splice(j, 1);
        }
        return newArray;
    };
    FirstDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FirstDataService);
    return FirstDataService;
}());
exports.FirstDataService = FirstDataService;
//# sourceMappingURL=first-data.service.js.map