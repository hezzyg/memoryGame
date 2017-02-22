import {Injectable} from '@angular/core';

@Injectable()
export class FirstDataService {
    constructor () {
    this.numOfCards = 4;
}

numOfCards:number;


    setNumOfCards (num:number) {       
        this.numOfCards = num;
    }

    getNumOfCards() {
        return this.numOfCards;
    }

    getCards (n:number) {
        var cards: cardType[] = [];
        for (let i=0; i < n; i++) {
            var temp : cardType = {
                id: i,
                content: i + 1,
                flipped: false
            };
            cards.push(temp);
            var temp : cardType = {
                id: i + n,
                content: i + 1,
                flipped: false
            };                     
            cards.push(temp);
        }        
        return this.randomize(cards);
    }   

    randomize (array : cardType[]) {        
        var newArray : cardType[] = [];
        var cols : number;
        if (array.length == 32) cols = 8;
            else cols = 4;
        while (array.length > 0) {
            let j = Math.floor(Math.random() * array.length);               
            newArray.push(array[j]);
            array.splice(j,1);            
        }        
        return newArray;
    }
    
}

interface cardType {
    id: number;
    content: number;
    flipped: boolean;
}