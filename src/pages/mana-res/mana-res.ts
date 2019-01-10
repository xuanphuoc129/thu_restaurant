import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ManaResPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mana-res',
  templateUrl: 'mana-res.html',
})
export class ManaResPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManaResPage');
  }
  restaurants = [
    {
      name: "delicious",
      userid: 121,
      status: 1,
    },
    {
      name: "Đường ngon",
      userid: 502,
      status: 0,
    },
    {
      name: "Trâu tươi",
      userid: 15,
      status: 1,
    },
    {
      name: "Thu Hằng",
      userid: 424,
      status: 0,
    },
    {
      name: "Trâu Tươi -Hai Bà Trưng",
      userid: 601,
      status: 1,
    }
  ]
}
