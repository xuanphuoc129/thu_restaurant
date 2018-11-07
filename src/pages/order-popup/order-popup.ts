import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderPopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-popup',
  templateUrl: 'order-popup.html',
})
export class OrderPopupPage {
  [x: string]: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPopupPage');
  }
  onClicksend(){
    let popup = this.modalCtrl.create("OrderPopupPage"); // tao page modal.(ten page . ts) 
    popup.present();
  }
}
