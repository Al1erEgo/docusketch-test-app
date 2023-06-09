import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RandomIconComponent} from "./components/random-icon/random-icon.component";
import {fas} from "@fortawesome/free-solid-svg-icons";

@NgModule({
  declarations: [
    AppComponent, RandomIconComponent
  ],
  imports: [
    BrowserModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas)
  }
}
