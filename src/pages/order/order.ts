import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Utils } from '../../providers/core/app/utils';
import { Orders } from '../../providers/class/Orders';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { RestaurantSFSConnector } from '../../providers/smartfox/SFSConnector';
import { UserData } from '../../providers/class/UserData';
import { Paramskey } from '../../providers/smartfox/Paramkeys';
import { RestaurantClient } from '../../providers/smartfox/RestaurantClient';
import { RestaurantCMD } from '../../providers/smartfox/RestaurantCMD';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'OrderPage',
  segment: 'order'
})
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  mDate: string = "";
  mTime: string = "07:00";
  mNote: string = "";

  mOrder: Orders = new Orders();

  constructor(
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    this.mDate = Utils.getRequestDate(new Date());
  }

  ionViewDidLoad() {
    this.mAppModule._loadAppConfig().then(() => {
      
    }).catch((err) => {

    })
  }

  onClicksend() {
    if(this.mOrder.getCustomer_name().trim() == '' || this.mOrder.getCustomer_phone().trim() == ''){
      return;
    }
    this.onLoadConfigDone();
    
  }

  onLoadConfigDone() {
    this.mAppModule.showLoadingNoduration();
    this.connectToServer();
  }

  connectToServer() {
    RestaurantSFSConnector.getInstance().connect().then(() => {
      this.doLogin();
    }).catch(err => {
      this.mAppModule.hideLoading();
      alert("Không thể kết nối đến server.");
    })
  }

  doLogin() {
    let userData = new UserData();
    userData.setUsername("order");
    userData.setPassword("order");

    RestaurantSFSConnector.getInstance().doLogin(userData).then((data) => {
      this.loginSuccess(data);
    }).catch(err => {
      
      this.mAppModule.hideLoading();
      alert("Đăng nhập thất bại.");
    })
  }

  loginSuccess(data) {
    // this.mAppModule.onLoginSuccess(data);
    RestaurantSFSConnector.getInstance().addListenerForExtensionResponse();
    RestaurantSFSConnector.getInstance().addListener("OrderPage", response => {
      this.onExtensions(response);
    })
    let l1 = "Ngày đặt: " + this.mDate + "; ";
    let l2 = "Giờ: " + this.mTime + "; ";
    let l3 = "Ghi chú: " + this.mNote;
    this.mOrder.setNote(l1 + l2 + l3);
    this.mOrder.setRestaurant_id(1);
    RestaurantSFSConnector.getInstance().createOrder(this.mOrder);
  }

  ionViewWillUnload() {
    RestaurantSFSConnector.getInstance().removeListener("OrderPage");
  }

  onExtensions(response) {
    this.mAppModule.hideLoading();
    let cmd = response.cmd;
    let params = response.params;

    if (params.getInt(Paramskey.STATUS) == 1) {
      let dataBase = RestaurantClient.getInstance().doBaseDataWithCMDParams(cmd, params);
      if (cmd == RestaurantCMD.CREATE_ORDER) {
        this.onResponseCreateOrder(dataBase);
      }
    } else {
      alert(params.getUtfString(Paramskey.MESSAGE));
    }
  }

  onResponseCreateOrder(database) {
    alert("Đặt hàng thành công!");
    this.mOrder = new Orders();
    this.mNote = "";
  }

}
