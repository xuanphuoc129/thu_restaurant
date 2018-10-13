import { Component } from '@angular/core';

/**
 * Generated class for the ResBlock5Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'res-block5',
  templateUrl: 'res-block5.html'
})
export class ResBlock5Component {

  text: string;

  constructor() {
    console.log('Hello ResBlock5Component Component');
    this.text = 'Hello World';
  }

}
