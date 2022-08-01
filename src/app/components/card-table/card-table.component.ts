import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { PokeCharacteristicResponse } from 'src/app/interface/pokeCharacteristicResponse';
import { PokemonResponse } from 'src/app/interface/pokemonResponse';
import { LocalService } from 'src/app/services/local.service';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { Pokelist } from '../../interface/pokemonList';



@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {


  pokemonList: Pokelist[] = [];
  numerList: number[] = [];
  loading: boolean = true;

  _startGame: boolean = true;
  _timeLapsed: any;
  timeSpend: number = 0;

  timer = timer(1000, 1000);

  startTimer() {
    this.timer.subscribe((val) => {
      if(this._startGame) {
        this.timeSpend++;
      }
    });
  }


  constructor(
    private pokeService: PokeapiService,
    private router: Router,
    private localstorage: LocalService) {

    // console.log('card table component: ', this.pokeService.getOpt.value);
    try {
      this.getPokeList(this.pokeService.getOpt.value.dificulty);
      console.log(this.pokemonList);

      // this.localstorage.saveData('id', '123456');

      // for (let i = 0; i < this.pokemonList.length; i++) {
      //   const e = this.pokemonList[i];

      // }
      this.loading = false;
    } catch (e) {
      this.router.navigate(['/']);
    }

  }



  ngOnInit(): void {
  }



  getPokeList(cardNumber: number) {

    const cant = this.generateArrNumber(cardNumber);

    // console.log('=== GetPokeList Arr Number ====');

    // console.log(cant);


    for (let i = 0; i < cant.length; i++) {
      const rand = cant[i];

      let info = this.getServicePokeInfo(rand);

      this.pokemonList.push(info);


    }


    // console.log('=============', 'ARRAY', '=============');


    // console.log(this.pokemonList);

  }

  generateArrNumber(cant: number) {
    const limit: number = cant;
    let arrResp: number[] = [];

    for (let i = 0; i < limit; i++) {
      const rand = Math.round((Math.random() * 150));

      if (!arrResp.includes(rand)) {
        arrResp.push(rand, rand);
      } else {
        console.log('Valor Repetido');
        i--;
      }

    }
    // console.log('Arr Resp: ', arrResp);

    this.shuffle(arrResp);

    return arrResp;

  }


  private getServicePokeChar(id: number) {

    let resp = "Pokemon sin descripcion";

    this.pokeService.getPokeCharacteristic(`${id}`)
      .subscribe({
        next(data: PokeCharacteristicResponse) {
          if (data != null) {
            data.descriptions.forEach(e => {
              if (e.language.name == 'es') {
                resp = e.description;
              }
            });
          }
        },
        error(err) {
          console.log(err);
        },
        complete() {
          console.log('getPokeCharacteristic Completado');
        },
      });

    return resp
  }

  private getServicePokeInfo(id: number) {

    const pokeTypes = [
      {
        "name": "bug",
        "newName": "grass"
      },
      {
        "name": "ghost",
        "newName": "ground"
      },
      {
        "name": "rock",
        "newName": "steel"
      },
      {
        "name": "poison",
        "newName": "fairy"
      },
      {
        "name": "ice",
        "newName": "water"
      },

    ]

    let pokeData = {} as Pokelist;
    // const desc = this.getServicePokeChar(id);

    this.pokeService.getPoke(`${id}`)
      .subscribe({
        next(data: PokemonResponse) {
          // console.log('id:', data.id);
          const img = data.sprites.other?.['official-artwork'].front_default;
          let pokeName = data.types[0].type.name;
          for (let i = 0; i < pokeTypes.length; i++) {
            const e = pokeTypes[i];
            if (e.name === data.types[0].type.name) {
              console.log(e);
              pokeName = e.newName;
            }

            // data.types[0].type.name 
          }

          // console.log(data.types[0].type.name);

          // console.log(pokeName);


          // console.log('========', data.types[0].type.name, '=======');

          pokeData.id = data.id.toString();
          pokeData.name = data.name;
          pokeData.img = (img === undefined) ? "no image" : data.sprites.other?.['official-artwork'].front_default;
          pokeData.type = pokeName;
          // pokeData.desc = desc;
          pokeData.isSelected = false;


        },
        error(err) {
          console.log(err);
        },
        complete() {

          // console.log('getPoke Completado');

        },
      })
    
    return pokeData;

  }


  private shuffle(array: number[]) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }








}
