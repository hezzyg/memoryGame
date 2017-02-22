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
var first_data_service_1 = require('../services/first-data.service');
var core_2 = require('@angular/core');
var CardComponent = (function () {
    function CardComponent(firstDataService) {
        this.firstDataService = firstDataService;
        this.numOfCards = this.firstDataService.getNumOfCards();
        if (this.numOfCards !== 4) {
            this.fontSize = "5.5vw";
            this.borderRadius = "1vw";
            this.borderSize = "0.5vw";
        }
        else {
            this.fontSize = "11vw";
            this.borderRadius = "2vw";
            this.borderSize = "1vw";
        }
    }
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Object)
    ], CardComponent.prototype, "card", void 0);
    CardComponent = __decorate([
        core_1.Component({
            selector: 'card',
            templateUrl: 'app/card/card.template.html',
            styleUrls: ['app/card/card.style.css']
        }), 
        __metadata('design:paramtypes', [first_data_service_1.FirstDataService])
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map