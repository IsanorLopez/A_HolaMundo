import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/mainpage.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    ListComponent,
    MainPageComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
