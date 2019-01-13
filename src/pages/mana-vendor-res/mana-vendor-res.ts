import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { RestaurantSFSConnector } from '../../providers/smartfox/SFSConnector';
import { Paramskey } from '../../providers/smartfox/Paramkeys';
import { RestaurantClient } from '../../providers/smartfox/RestaurantClient';
import { RestaurantCMD } from '../../providers/smartfox/RestaurantCMD';
import { Vendors } from '../../providers/class/Vendors';

/**
 * Generated class for the ManaVendorResPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mana-vendor-res',
  templateUrl: 'mana-vendor-res.html',
})
export class ManaVendorResPage {

  vendors : Array<Vendors> = [];

  constructor(
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    if (this.mAppModule.isLogin) {
      RestaurantSFSConnector.getInstance().addListener("ManaVendorResPage", response => {
        this.onExtensions(response);
      })
      RestaurantSFSConnector.getInstance().getListVendor();
    } else {
      this.navCtrl.setRoot("LoginPage");
    }
  }

  onExtensions(response) {
    let cmd = response.cmd;
    let params = response.params;

    if (params.getInt(Paramskey.STATUS) == 1) {
      let dataBase = RestaurantClient.getInstance().doBaseDataWithCMDParams(cmd, params);
      if (cmd == RestaurantCMD.GET_VENDOR_LIST) {
        this.onBaseListVendor(dataBase);
      }
    } else {
      alert(params.getUtfString(Paramskey.MESSAGE));
    }
  }

  ionViewWillUnload() {
    RestaurantSFSConnector.getInstance().removeListener("ManaVendorResPage");
  }

  onBaseListVendor(dataBase){
    this.vendors = dataBase;
  }

  onClickAdd(){
    this.mAppModule.showModal("CreateVendorPage",null,(data)=>{
      if(data){
        RestaurantSFSConnector.getInstance().getListVendor();
      }
    })
  }

}
