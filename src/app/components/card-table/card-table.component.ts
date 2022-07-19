import { Component, OnInit } from '@angular/core';
import { PokeCharacteristicResponse } from 'src/app/interface/pokeCharacteristicResponse';
import { PokemonResponse } from 'src/app/interface/pokemonResponse';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { Pokelist } from '../../interface/pokemonList';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {



  pokemonList: any = [];

  constructor(private pokeService: PokeapiService) {

    this.obtenerPokeList();


  }

  obtenerPokeList() {

    let pokeArr:any  = [];

    for (let i = 0; i < 5; i++) {
      let desc = "Pokemon sin descripcion";

      const rand = Math.round((Math.random() * 150));
      console.log("Numero Random:", rand);

      this.pokeService.getPokeCharacteristic(`${rand}`)
        .subscribe({
          next(data: PokeCharacteristicResponse) {
            if (data != null) {
              data.descriptions.forEach(e => {
                if (e.language.name == 'es') {
                  desc = e.description;
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


        this.pokeService.getPoke(`${rand}`)
        .subscribe({
          next(data: PokemonResponse) {
            console.log('id:', data.id);
            const img = data.sprites.other?.['official-artwork'].front_default;
            
            let pokeData = {} as Pokelist;
            console.log('========', data.types[0].type.name, '=======');
            
              pokeData.id = data.id.toString();
              pokeData.name = data.name;
              pokeData.img = (img === undefined) ? "no image" : data.sprites.other?.['official-artwork'].front_default;
              pokeData.type = data.types[0].type.name;
              pokeData.desc = desc;
              pokeData.isSelected = false;
            
            pokeArr.push(pokeData);
            pokeArr.push(pokeData);
          },
          error(err) {
            console.log(err);
          },
          complete() {
          
            console.log('getPoke Completado');
            
          },
        }, )


        
      // this.pokeService.getPoke(`${rand}`)
      // .subscribe((data: PokemonResponse) => {
      //   console.log('id:', data.id);
      //   const img = data.sprites.other?.['official-artwork'].front_default;
      //   this.pokemonList = {
      //       id: data.id.toString(),
      //       name: data.name,
      //       img: (img === undefined) ? "no image" : data.sprites.other?.['official-artwork'].front_default,
      //       type: data.types[0].type.name,
      //       desc: desc
      //   };
      //   // console.log('name:', data.name);
      //   // this.pokemonList.push(data.name);
      //   // console.log('img Url:', data.sprites.other?.['official-artwork'].front_default);
      //   // this.pokemonList.push(data.sprites.other?.['official-artwork'].front_default);
      //   // console.log('type:', data.types[0].type.name);
      //   // this.pokemonList.push(data.types[0].type.name);
      // }, (error) => {
      //   console.log('');
      // });

     

        // this.pokemonList[i] = pokeObj;
        
        // this.pokemonList.push(pokeObj);



    }

    this.pokemonList = pokeArr;
    
    console.log('=============', 'ARRAY','=============');
    
    console.log(this.pokemonList);
    this.shuffle(this.pokemonList);

  }




  shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

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
};





  ngOnInit(): void {
  }

}
