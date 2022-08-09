import { Component, Input, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { CardTableComponent } from '../card-table/card-table.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  startGame: boolean = false;
  cardMatch: any = [];

  @Input() items: any = [];

  constructor(private cardTable: CardTableComponent) { }
  
  selected(i: number) {
    // console.log(this.startGame);

    if (!this.startGame) {
      this.cardTable.startTimer();
      this.startGame = true;
    }
    console.log('Selected', this.cardMatch.length);

    if (this.cardMatch.length < 2 && !this.cardMatch.includes(i)) {
      this.items[i].isSelected = !this.items[i].isSelected;
      this.cardMatch.push({
        idx: i,
        id: this.items[i].id
      });
    }

    console.log(this.cardMatch.length);
    if (this.cardMatch.length == 2) {
      setTimeout(() => {
        this.isMatch();
      }, 750);
    }


  }

  ngOnInit(): void {
    // console.log(this.items);
  }


  isMatch() {

    console.log(this.cardMatch);
    if (this.cardMatch[0].id !== this.cardMatch[1].id) {
      this.items[ this.cardMatch[0].idx ].isSelected = false;
      this.items[ this.cardMatch[1].idx ].isSelected = false;
    }

    this.cardMatch = [];

    

  }


  isComplete() {
    let complete: boolean = false;
    
    // console.log( 'INDEXOF', items[1].indexOf(""));
    
    
   const bool =  this.items.map(	(v: any) => {
      return v.isSelected;
  })
   
   
    
   console.log( bool.indexOf(false) )
   
   
    if( bool.indexOf(true) != -1 ) {
      complete = true;
    }
    
    return complete;
  }

}



