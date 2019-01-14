import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { RestaurantSFSConnector } from '../../providers/smartfox/SFSConnector';
import { Paramskey } from '../../providers/smartfox/Paramkeys';
import { RestaurantClient } from '../../providers/smartfox/RestaurantClient';
import { RestaurantCMD } from '../../providers/smartfox/RestaurantCMD';
import { Restaurants } from '../../providers/class/Restaurant';

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
  restaurants : Array<Restaurants> = [];

  constructor(
    public mAppModuel: AppModuleProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    if (!this.mAppModuel.isLogin) {
      this.navCtrl.setRoot("LoginPage");
    } else {
      RestaurantSFSConnector.getInstance().addListener("ManaResPage", response => {
        this.onExtensions(response);
      })
      RestaurantSFSConnector.getInstance().getListRestaurant();
    }
  }

  onExtensions(response) {
    let cmd = response.cmd;
    let params = response.params;

    if (params.getInt(Paramskey.STATUS) == 1) {
      let dataBase = RestaurantClient.getInstance().doBaseDataWithCMDParams(cmd, params);
      if (cmd == RestaurantCMD.GET_LIST_RESTAURANT) {
        this.onBaseListRestaurant(dataBase);
      }
    } else {
      alert(params.getUtfString(Paramskey.MESSAGE));
    }
  }

  ionViewWillUnload() {
    RestaurantSFSConnector.getInstance().removeListener("ManaResPage");
  }

  onBaseListRestaurant(dataBase) {
    this.restaurants = dataBase;
  }

  onClickAdd() {
    this.mAppModuel.showModal("CreateRestaurantPage", null, (data) => {
      if (data) {
        RestaurantSFSConnector.getInstance().getListRestaurant();
      }
    });
  }
  onClickRes(){
    this.mAppModuel.showModal("CreateFixPage",null,(data)=>{
      if(data){
        RestaurantSFSConnector.getInstance().getListRestaurant();
      }
    })
  }

}
