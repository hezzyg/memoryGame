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
var PlayBoardComponent = (function () {
    function PlayBoardComponent(firstDataService) {
        this.firstDataService = firstDataService;
        this.flippedCard = 0;
        this.currentId = -1;
        this.flippedIds = [];
        this.pairsFound = 0;
        this.timeout = false;
        this.showMsg = false;
        this.cardHeight = "35%";
        this.cardWidth = "25%";
    }
    PlayBoardComponent.prototype.ngOnChanges = function (changes) {
        if (changes.showCards.currentValue) {
            this.cardsList = this.firstDataService.getCards(this.numOfCards);
            this.firstDataService.setNumOfCards(this.numOfCards);
            if (this.numOfCards == 4)
                this.cardHeight = "35vh";
            else
                this.cardHeight = "17.5vh";
            if (this.numOfCards == 16)
                this.cardWidth = "12.5%";
            else
                this.cardWidth = "25%";
        }
    };
    PlayBoardComponent.prototype.pickCard = function (card) {
        var scope = this; // for timeOut use
        if (this.flippedIds.indexOf(card.id) == -1 && !card.flipped && !this.timeout) {
            card.flipped = true;
            //if this is the second card
            if (this.flippedCard !== 0) {
                //check for match
                if (card.content == this.flippedCard) {
                    this.flippedIds.push(this.currentId);
                    this.flippedIds.push(card.id);
                    this.currentId = -1;
                    this.flippedCard = 0;
                    this.pairsFound++;
                    if (this.pairsFound == this.numOfCards)
                        this.gameFinishedMsg();
                }
                else {
                    //re-flipp cards         
                    this.timeout = true;
                    setTimeout(function () {
                        var index = scope.cardsList.map(function (e) { return e.id; }).indexOf(scope.currentId);
                        scope.cardsList[index].flipped = false;
                        card.flipped = false;
                        scope.currentId = -1;
                        scope.flippedCard = 0;
                        scope.timeout = false;
                    }, 800);
                }
            }
            else {
                // this is the first card
                this.flippedCard = card.content;
                this.currentId = card.id;
            }
        }
    };
    PlayBoardComponent.prototype.gameFinishedMsg = function () {
        var scope = this;
        setTimeout(function () {
            scope.showMsg = true;
        }, 500);
    };
    PlayBoardComponent.prototype.reload = function () {
        window.location.reload();
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Boolean)
    ], PlayBoardComponent.prototype, "showCards", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Number)
    ], PlayBoardComponent.prototype, "numOfCards", void 0);
    PlayBoardComponent = __decorate([
        core_1.Component({
            selector: 'play-board',
            templateUrl: 'app/play-board/play-board.template.html',
            styleUrls: ['app/play-board/play-board.style.css'],
            providers: [first_data_service_1.FirstDataService]
        }), 
        __metadata('design:paramtypes', [first_data_service_1.FirstDataService])
    ], PlayBoardComponent);
    return PlayBoardComponent;
}());
exports.PlayBoardComponent = PlayBoardComponent;
//# sourceMappingURL=play-board.component.js.map