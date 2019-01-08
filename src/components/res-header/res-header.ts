import { Component } from '@angular/core';

/**
 * Generated class for the ResHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'res-header',
  templateUrl: 'res-header.html'
})
export class ResHeaderComponent {

  text: string;
  params: string = "abc";
  constructor() {
    console.log('Hello ResHeaderComponent Component');
    this.text = 'Hello World';
  }

  goToLink(link){
    let aEle = document.createElement("a");
    aEle.href = link;
    document.body.appendChild(aEle);
    aEle.click();
  }

}
