import { Component } from '@angular/core';
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {icons} from "../../data/icons";



@Component({
  selector: 'ds-app-random-icon',
  templateUrl: './random-icon.component.html',
  styleUrls: ['./random-icon.component.css']
})
export class RandomIconComponent {

  iconToRender: IconProp;

  constructor() {
    this.iconToRender = ['fas', 'flag'];
  }

  changeIcon(): void  {
    setTimeout(()=>{
      this.iconToRender = icons[Math.floor(Math.random() * icons.length)]
    }, 3000)
  }
}
