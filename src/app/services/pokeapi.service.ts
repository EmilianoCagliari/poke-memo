import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonResponse } from '../interface/pokemonResponse';
import { PokeCharacteristicResponse } from '../interface/pokeCharacteristicResponse';
import { FormGroup } from '@angular/forms';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokeapiService {

  timer = timer(1000, 1000);
  private _timeLapsed: number = 0;
  private _startGame: boolean = false;

  private _opt:any = [];



  startTimer() {
    this.timer.subscribe((val) => {
      if(this._startGame) {
        this._timeLapsed++;
        console.log(this._timeLapsed)
      }
    });
  }


  get timeLapsed() {
    return this._timeLapsed;
  }

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

