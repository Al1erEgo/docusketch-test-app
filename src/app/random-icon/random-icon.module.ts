import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomIconComponent } from './components/random-icon/random-icon.component';



@NgModule({
  declarations: [
    RandomIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [RandomIconComponent]
})
export class RandomIconModule { }
