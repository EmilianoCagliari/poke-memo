import { Component, Input, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  startGame: boolean = false;
  cardMatch = [];

  @Input() items: any = [];

  constructor( private pokeService: PokeapiService) { }


  selected(i: number) {  
    console.log(this.startGame);
    
    if(!this.startGame) {
      this.pokeService.startTimer();
      this.startGame = true;
    }
    this.items[i].isSelected = !this.items[i].isSelected ;
    
  }

  ngOnInit(): void {
  }


  isMatch() {

  }


}
