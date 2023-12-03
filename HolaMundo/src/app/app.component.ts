import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  public title: string = 'HolaMundo';
  public counter: number = 10;

  modifyBy( numero: number ): void {
    this.counter += numero;
  }

  reset(): void {
    this.counter = 0;
  }

}
