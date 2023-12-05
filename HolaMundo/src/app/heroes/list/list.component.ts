import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public deletedHeroe?: string;
  public heroNames: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor', 'Daredevil'];

  removeHeroe():void {
    this.deletedHeroe = this.heroNames.pop();
  }

}
