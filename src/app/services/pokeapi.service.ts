import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonResponse } from '../interface/pokemonResponse';
import { PokeCharacteristicResponse } from '../interface/pokeCharacteristicResponse';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor( private http:HttpClient ) { 
    console.log( 'Http Service Listo!' );
  }

  private getQuery( query: string ) {
    const url =`https://pokeapi.co/api/v2/pokemon/${query}`;
    return this.http.get(url);
  }


  getPoke( id: string) {
    const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.http.get<PokemonResponse>(url);
  }

  getPokeCharacteristic(id: string ) {
    const url =`https://pokeapi.co/api/v2/characteristic/${id}`;
    return this.http.get<PokeCharacteristicResponse>(url);
  }


}

