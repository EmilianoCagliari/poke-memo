import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public newGameform!: FormGroup;


  setValue() {
    console.log(this.newGameform.value);
  }

  constructor() { 

  }

  ngOnInit(): void {
    this.newGameform = new FormGroup( 
      {
        name: new FormControl( '', [Validators.required ]),
        dificulty: new FormControl('', [Validators.required]) 
      }
    )

  }

}
