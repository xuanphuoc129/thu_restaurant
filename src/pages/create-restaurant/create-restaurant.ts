import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Restaurants } from '../../providers/class/Restaurant';
import { RestaurantSFSConnector } from '../../providers/smartfox/SFSConnector';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { RestaurantClient } from '../../providers/smartfox/RestaurantClient';
import { RestaurantCMD } from '../../providers/smartfox/RestaurantCMD';
import { Paramskey } from '../../providers/smartfox/Paramkeys';

/**
 * Generated class for the CreateRestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-restaurant',
  templateUrl: 'create-restaurant.html',
})
export class CreateRestaurantPage {

  mRestaurant: Restaurants = new Restaurants();

  constructor(
    public mViewController: ViewController,
    public mAppModuel: AppModuleProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    RestaurantSFSConnector.getInstance().addListener("CreateRestaurantPage", response => {
      this.onExtension(response);
    })
  }

  ionViewWillUnload(){
    RestaurantSFSConnector.getInstance().removeListener("CreateRestaurantPage");
  }

  onExtension(response) {
    this.mAppModuel.hideLoading();

    let cmd = response.cmd;
    let params = response.params;

    if (RestaurantClient.getInstance().doCheckStatusParams(params)) {
      if (cmd == RestaurantCMD.CREATE_RESTAURANT) {
        this.showMessageSuccess();
      } 
    } else {
      this.mAppModuel.showToast(params.getUtfString(Paramskey.MESSAGE));
    }
  }

  showMessageSuccess(){
    this.mAppModuel.showToast("Thêm mới thành công");
    this.mViewController.dismiss(1);
  }

  onClickSave(){
    if(this.mRestaurant.getName().trim() == ''){
      alert("Bạn cần nhập tên nhà hàng");
    }else{
      this.mAppModuel.showLoading();
      RestaurantSFSConnector.getInstance().doCreateRestaurant(this.mRestaurant);
    }
  }

}
