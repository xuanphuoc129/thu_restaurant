import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Utils } from '../../providers/core/app/utils';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'OrderPage',
  segment:'order'
})
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  mDate: string = "";

  mTime: string = "07:00";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mDate = Utils.getRequestDate(new Date());
  }

  ionViewDidLoad() {
    
  }

}
