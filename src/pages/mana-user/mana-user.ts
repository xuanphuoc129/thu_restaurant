import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantSFSConnector } from '../../providers/smartfox/SFSConnector';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { Paramskey } from '../../providers/smartfox/Paramkeys';
import { RestaurantClient } from '../../providers/smartfox/RestaurantClient';
import { RestaurantCMD } from '../../providers/smartfox/RestaurantCMD';

/**
 * Generated class for the ManaUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mana-user',
  templateUrl: 'mana-user.html',
})
export class ManaUserPage {
  users = [];

  constructor(
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    if (this.mAppModule.isLogin) {
      RestaurantSFSConnector.getInstance().addListener("ManaUserPage", response => {
        this.onExtensions(response);
      })
      RestaurantSFSConnector.getInstance().getListUser();
    } else {
      this.navCtrl.setRoot("LoginPage");
    }
  }

  onExtensions(response) {
    let cmd = response.cmd;
    let params = response.params;

    if (params.getInt(Paramskey.STATUS) == 1) {
      let dataBase = RestaurantClient.getInstance().doBaseDataWithCMDParams(cmd, params);
      if (cmd == RestaurantCMD.GET_LIST_ACCOUNT) {
        this.onBaseListRestaurant(dataBase);
      }
    } else {
      alert(params.getUtfString(Paramskey.MESSAGE));
    }
  }

  ionViewWillUnload() {
    RestaurantSFSConnector.getInstance().removeListener("ManaUserPage");
  }

  onBaseListRestaurant(dataBase) {
    this.users = dataBase;
  }

  onClickAdd() {
    this.mAppModule.showModal("CreateAccountPage", null, (data) => {
      if (data) {
        RestaurantSFSConnector.getInstance().getListUser();
      }
    });
  }

}
