import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokeApiService {

  listePokemon = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemonList() {
    return this.http.get(this.listePokemon);
  }

  getPokemonDetail(pokeId: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.listePokemon + '/' + pokeId);
  }
}
