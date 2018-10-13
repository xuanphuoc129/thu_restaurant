import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the OrderBtnFabComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'order-btn-fab',
  templateUrl: 'order-btn-fab.html'
})
export class OrderBtnFabComponent {

  text: string;

  constructor(
    public modalCtrl: ModalController
  ) {
    console.log('Hello OrderBtnFabComponent Component');
    this.text = 'Hello World';
  }
  onClickOrder(){
    let popup = this.modalCtrl.create("OrderPopupPage"); // tao page modal.(ten page . ts) 
    popup.present(); // hien thi pupup
  }
}
