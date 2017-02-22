import { Component } from '@angular/core';
import {FirstDataService} from '../services/first-data.service';
import {Input} from '@angular/core';

@Component({
  selector: 'select-level',
  templateUrl: 'app/select-level/select-level.template.html',
  styleUrls: ['app/select-level/select-level.style.css'],
  providers: [FirstDataService]  
})

export class SelectLevelComponent  {   
  numOfCards:number;
  leaveAnim:boolean;
  showCardsBoard : boolean;  
  
  constructor(private firstDataService : FirstDataService){
  } 

  setLevel(level:number) {    
    this.numOfCards = level;
    this.showCardsBoard = true;
    var scope = this;
    setTimeout(function() {
        scope.leaveAnim = true;
    }, 400);
  }

}

interface cardType {
    id: number;
    content: number;
    flipped: boolean;
}