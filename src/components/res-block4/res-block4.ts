import { Component } from '@angular/core';

/**
 * Generated class for the ResBlock4Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'res-block4',
  templateUrl: 'res-block4.html'
})
export class ResBlock4Component {

  text: string;

  constructor() {
    console.log('Hello ResBlock4Component Component');
    this.text = 'Hello World';
  }

}
