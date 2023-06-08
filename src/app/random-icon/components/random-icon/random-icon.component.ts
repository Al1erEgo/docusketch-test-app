import { Component } from '@angular/core';
import {IconName} from "@fortawesome/fontawesome-svg-core";
import {IconPrefix} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'ds-app-random-icon',
  templateUrl: './random-icon.component.html',
  styleUrls: ['./random-icon.component.css']
})
export class RandomIconComponent {
    iconToRender: [IconPrefix, IconName] = ['fas', 'house']
}
