import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomIconComponent } from './components/random-icon/random-icon.component';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';




@NgModule({
  declarations: [
    RandomIconComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [RandomIconComponent]
})
export class RandomIconModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas)
  }
}
