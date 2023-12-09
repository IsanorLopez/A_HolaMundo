import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: 'mainpage.component.html'
})

export class MainPageComponent {

  constructor( public dbzService: DbzService ){}

}
