import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  public name: string = 'Ironman';
  public edad: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  heroDescription(): string {
    return `${ this.name } - ${ this.edad }`;
  }

  changeHero():void {
    (this.name == "Spiderman" ) ? this.name = "IronMan" : this.name = "Spiderman";
  }

  changeAge():void {
    (this.edad == 25 ) ? this.edad = 45 : this.edad = 25;
  }

}
