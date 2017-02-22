import { Component } from '@angular/core';
import {FirstDataService} from '../services/first-data.service';
import {Input} from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: 'app/card/card.template.html',
  styleUrls: ['app/card/card.style.css']
})
export class CardComponent  {  
  
  constructor(private firstDataService:FirstDataService){   
    this.numOfCards = this.firstDataService.getNumOfCards();    
    if (this.numOfCards !== 4) {
      this.fontSize = "5.5vw";
      this.borderRadius = "1vw";
      this.borderSize = "0.5vw";
    } else {
      this.fontSize = "11vw";
      this.borderRadius = "2vw";
      this.borderSize = "1vw";
    }
  }

  @Input() card: cardType;
  numOfCards : number;
  fontSize: string;
  borderSize: string;
  borderRadius:string;
}

interface cardType {
    id: number;
    content: number;
    flipped: boolean;
}