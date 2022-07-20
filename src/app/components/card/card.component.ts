import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  
  @Input() items: any = [];

  constructor() { }


  selected(i: number) {
    // console.log('Array Items:', this.items);
    
    // console.log('INDEX:', i);
    // console.log('This.items:', this.items[i]);
    
    
    this.items[i].isSelected = !this.items[i].isSelected ;
    // console.log('Index boolean:', i, this.items[i].isSelected);    
  }

  ngOnInit(): void {
  }

}
