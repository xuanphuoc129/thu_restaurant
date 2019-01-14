import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EntertainmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: "EntertainmentPage",
    segment: "entertainment"
  }
)
@Component({
  selector: 'page-entertainment',
  templateUrl: 'entertainment.html',
})
export class EntertainmentPage {

  imageUrl: string = "./assets/imgs/abc.jpg";
  imageUrl1: string = "./assets/imgs/newyear.png";
  imageUrl2: string = "./assets/imgs/noel.jpg";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad EntertainmentPage');
  }

}
