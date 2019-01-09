import { Component } from '@angular/core';

/**
 * Generated class for the AdminheaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'adminheader',
  templateUrl: 'adminheader.html'
})
export class AdminheaderComponent {

  text: string;

  constructor() {
    console.log('Hello AdminheaderComponent Component');
    this.text = 'Hello World';
  }

}
