import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonResponse } from '../interface/pokemonResponse';
import { PokeCharacteristicResponse } from '../interface/pokeCharacteristicResponse';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class PokeapiService {

  private _opt:any = [];



  get getOpt() {
    return this._opt;
  }

  setOpt(data: FormGroup) {
    this._opt = data;
  }



  constructor(private http: HttpClient) {
    console.log('Http Service Listo!');
  }

  private getQuery(query: string) {
    const url = `https://pokeapi.co/api/v2/pokemon/${query}`;
    return this.http.get(url);
  }


  getPoke(id: string) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.http.get<PokemonResponse>(url);
  }

  getPokeCharacteristic(id: string) {
    const url = `https://pokeapi.co/api/v2/characteristic/${id}`;
    return this.http.get<PokeCharacteristicResponse>(url);
  }


}

