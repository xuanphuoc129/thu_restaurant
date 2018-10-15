import { Component } from '@angular/core';

/**
 * Generated class for the ResBlock2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'res-block2',
  templateUrl: 'res-block2.html'
})
export class ResBlock2Component {

  text: string;
  url1:string = "../assets/imgs/res-bl2.6.jpg";
  url2:string = "../assets/imgs/res-bl2.7.jpg";
  url3:string = "../assets/imgs/res-bl2.8.jpg";
  url4:string = "../assets/imgs/res-bl2.9.jpg";
  imgs: Array<string> = [
    "../assets/imgs/res-bl2.6.jpg",
    "../assets/imgs/res-bl2.7.jpg",
    "../assets/imgs/res-bl2.8.jpg",
    "../assets/imgs/res-bl2.9.jpg"
  ];
  constructor() {
    console.log('Hello ResBlock2Component Component');
    this.text = 'Hello World';

  }



}
