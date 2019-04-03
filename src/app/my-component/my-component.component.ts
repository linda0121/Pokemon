import { Component, OnInit } from '@angular/core';
import {PokeApiService} from '../poke-api.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  pokemon: Pokemon;
  listPokemon: any[];
  pokemonChoisit: number;
  entree = '';

 constructor(private service: PokeApiService) {
   this.service.getPokemonList()
   .subscribe((data: object) => {
     /*tslint:disable:no-string-literal*/
     this.listPokemon = data['results'];
   });
 }

  displayPokemonId() {
    this.service.getPokemonDetail(this.entree)
    .subscribe((pokemon: Pokemon) => this.pokemon = pokemon);

  }
}
