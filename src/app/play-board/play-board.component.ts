import { Component } from '@angular/core';
import {FirstDataService} from '../services/first-data.service';
import {Input, OnChanges} from '@angular/core'

@Component({
  selector: 'play-board',
  templateUrl: 'app/play-board/play-board.template.html',
  styleUrls: ['app/play-board/play-board.style.css'],
  providers: [FirstDataService]
})
export class PlayBoardComponent  {  
  
  cardsList: cardType[];
  flippedCard:number = 0;
  currentId:number = -1;
  flippedIds: number[] = [];
  pairsFound:number = 0;
  timeout:boolean = false;
  showMsg:boolean = false;
  cardHeight:string = "35%";
  cardWidth: string = "25%";  

  @Input() showCards: boolean;
  @Input() numOfCards:number;
   
  constructor(private firstDataService : FirstDataService){        
  }

  ngOnChanges(changes:any) {     
      if (changes.showCards.currentValue) {
        this.cardsList = this.firstDataService.getCards(this.numOfCards);
        this.firstDataService.setNumOfCards(this.numOfCards);

        if (this.numOfCards == 4) 
          this.cardHeight = "35vh";
          else this.cardHeight = "17.5vh";

        if (this.numOfCards == 16) this.cardWidth = "12.5%";
          else this.cardWidth = "25%";       
      }
  }


  pickCard(card:cardType) {
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
          if (this.pairsFound == this.numOfCards) this.gameFinishedMsg();          
        } else {
          //re-flipp cards         
          this.timeout = true;
          setTimeout(function() {            
            var index = scope.cardsList.map(function(e: cardType) { return e.id; }).indexOf(scope.currentId);           
            scope.cardsList[index].flipped = false;            
            card.flipped = false;           
            scope.currentId = -1;
            scope.flippedCard = 0;
            scope.timeout = false;
          }, 800);
        }       
      } else {
        // this is the first card
        this.flippedCard = card.content;
        this.currentId = card.id;        
      }
    }    
  }

  gameFinishedMsg() {    
    var scope = this;
    setTimeout(function() {
      scope.showMsg = true;      
    }, 500);
  }

  reload() {
    window.location.reload();
  }


}

interface cardType {
    id: number;
    content: number;
    flipped: boolean;
}