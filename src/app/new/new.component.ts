import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public newGameform!: FormGroup;


  setValue() {
    // console.log(this.newGameform.value);
    this.pokeService.setOpt(this.newGameform);
    this.router.navigate(['game']);
  }

  constructor( private router:Router, private pokeService: PokeapiService) { 

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
