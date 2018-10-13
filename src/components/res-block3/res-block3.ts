import { Component } from '@angular/core';

/**
 * Generated class for the ResBlock3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'res-block3',
  templateUrl: 'res-block3.html'
})
export class ResBlock3Component {

  text: string;

  constructor() {
    console.log('Hello ResBlock3Component Component');
    this.text = 'Hello World';
  }

}
