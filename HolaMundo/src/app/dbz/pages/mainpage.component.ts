import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-mainpage',
  templateUrl: 'mainpage.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [
    {name: 'Krilling', power: 1000},
    {name: 'Goku', power: 9500},
    {name: 'Vegeta', power: 7000}
  ];

  onNewCharacter(character: Character):void {
    console.log(character);
    this.characters.push(character);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index,1);
  }

}
