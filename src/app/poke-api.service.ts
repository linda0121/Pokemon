import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokeApiService {

  apiURL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemonList() {
    return this.http.get(this.apiURL);
  }

  getPokemonDetail(pokeId: string | number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiURL}/${pokeId}`);
  }
}
