import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mRestaurantName: string = "Nhà hàng Delicious";
  constructor(public navCtrl: NavController) {
    // this.navCtrl.push("ContactPage",{name: "thu"});
  }

}
