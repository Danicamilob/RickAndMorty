import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCharacComponent } from './all-charac/all-charac.component';

/* @NgModule({
 
  declarations: [AllCharactersComponent],
  imports: [
    CommonModule
  ],
  exports: [AllCharactersComponent],
  
}) */


@NgModule({
  declarations: [AllCharacComponent],
  imports: [CommonModule],

  exports: [AllCharacComponent],
})




export class SharedComponentsModule2 {
}
