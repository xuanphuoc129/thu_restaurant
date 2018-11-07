import { Component, ViewChild } from '@angular/core';
import { Slides, ModalController } from 'ionic-angular';

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
  url: string = "./assets/imgs/res-table1.jpeg";
  url1: string = "./assets/imgs/res-table2.jpeg";
  url2: string = "./assets/imgs/res-table3.gif";
  url3: string = "./assets/imgs/res-table4.jpg";
  url4: string = "./assets/imgs/res-img4.jpg";
  url5: string = "./assets/imgs/res-bl2.1.jpg";
  url6: string = "./assets/imgs/res-bl2.2.jpg";
  url7: string = "./assets/imgs/res-birthdayn.png";// birthday
  url8: string = "./assets/imgs/menubonus.png";// blackTuesday
  url9: string = "./assets/imgs/res-bl1-ladies.png";// ladies

  constructor(
    public modalCtrl: ModalController
  ) {
    
    console.log('Hello ResBlock1Component Component');
    this.text = 'Hello World';
  }

  onNextSlide() {
    this.myslide.slideNext();
  }
  onBackSlide() {
    this.myslide.slidePrev();
  }
  // onClickOrder(){
  //   let pupup = this.modalCtrl.create("OrderPopupPage");
  //   pupup.present();
  // }

}
