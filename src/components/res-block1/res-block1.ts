import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the ResBlock1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'res-block1',
  templateUrl: 'res-block1.html'
})
export class ResBlock1Component {
  @ViewChild(Slides) myslide: Slides;
  text: string;
  url: string = "./assets/imgs/res-block2-b1.jpg";
  url1: string = "./assets/imgs/res-block2-b2.jpg";
  url2: string = "./assets/imgs/res-block2-b3.jpg";
  url3: string = "./assets/imgs/res-block2-b4.jpg";
  url4: string = "./assets/imgs/res-img4.jpg";
  url5: string = "./assets/imgs/res-bl2.1.jpg";
  url6: string = "./assets/imgs/res-bl2.2.jpg";
  url7: string = "./assets/imgs/res-bl2.3.jpg";
  url8: string = "./assets/imgs/res-bl2.4.jpg";
  url9: string = "./assets/imgs/res-bl2.5.jpg";

  constructor() {
    console.log('Hello ResBlock1Component Component');
    this.text = 'Hello World';
  }

  onNextSlide() {
    this.myslide.slideNext();
  }
  onBackSlide() {
    this.myslide.slidePrev();
  }

}
