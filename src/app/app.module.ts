import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RandomIconModule} from "./random-icon/random-icon.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RandomIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
