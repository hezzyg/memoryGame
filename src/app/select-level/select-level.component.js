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
var SelectLevelComponent = (function () {
    function SelectLevelComponent(firstDataService) {
        this.firstDataService = firstDataService;
    }
    SelectLevelComponent.prototype.setLevel = function (level) {
        this.numOfCards = level;
        this.showCardsBoard = true;
        var scope = this;
        setTimeout(function () {
            scope.leaveAnim = true;
        }, 400);
    };
    SelectLevelComponent = __decorate([
        core_1.Component({
            selector: 'select-level',
            templateUrl: 'app/select-level/select-level.template.html',
            styleUrls: ['app/select-level/select-level.style.css'],
            providers: [first_data_service_1.FirstDataService]
        }), 
        __metadata('design:paramtypes', [first_data_service_1.FirstDataService])
    ], SelectLevelComponent);
    return SelectLevelComponent;
}());
exports.SelectLevelComponent = SelectLevelComponent;
//# sourceMappingURL=select-level.component.js.map