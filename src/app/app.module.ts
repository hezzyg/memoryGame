import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms';

// import {routing} from './app.routing';

import { AppComponent }  from './app.component';
import { SelectLevelComponent} from './select-level/select-level.component'
import { PlayBoardComponent }  from './play-board/play-board.component';
import {CardComponent} from './card/card.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, PlayBoardComponent, CardComponent, SelectLevelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
