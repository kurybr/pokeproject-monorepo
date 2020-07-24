import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PokemonItemList, PokemonData } from '../interfaces'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  pokemons: Array<PokemonItemList> = [];
  pokemon: PokemonData = undefined;
  constructor(private http: HttpClient) {
    this.getAllPokemons()
  }
  async getAllPokemons() {
    const response: any = await this.http.get('https://pokeapi.co/api/v2/pokemon').toPromise()
    this.pokemons = response.results;
  }
  async getPokemonInfo( pokemon ) {
    const response: any = await this.http.get( pokemon.url ).toPromise()
    this.pokemon = response;
  }
}
