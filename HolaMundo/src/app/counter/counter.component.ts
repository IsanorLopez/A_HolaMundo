import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h3>Counter: {{ counter }}</h3>

  <button style="margin: 5px;" (click)="modifyBy(+1)" > +1 </button>
  <button style="margin: 5px;" (click)="modifyBy(-1)" > -1 </button>
  <button style="margin: 5px;" (click)="reset()" > reset </button>

  `
})

export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  public counter: number = 10;

  modifyBy( numero: number ): void {
    this.counter += numero;
  }

  reset(): void {
    this.counter = 0;
  }



}
