import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserData } from '../../providers/class/UserData';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { RestaurantSFSConnector } from '../../providers/smartfox/SFSConnector';
import { RestaurantClient } from '../../providers/smartfox/RestaurantClient';
import { RestaurantCMD } from '../../providers/smartfox/RestaurantCMD';
import { Paramskey } from '../../providers/smartfox/Paramkeys';

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  mUserData: UserData = new UserData();

  constructor(
    public mViewController: ViewController,
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    RestaurantSFSConnector.getInstance().addListener("CreateAccountPage", response => {
      this.onExtension(response);
    })
  }

  ionViewWillUnload() {
    RestaurantSFSConnector.getInstance().removeListener("CreateAccountPage");
  }


  onExtension(response) {
    this.mAppModule.hideLoading();

    let cmd = response.cmd;
    let params = response.params;
    if (RestaurantClient.getInstance().doCheckStatusParams(params)) {
      if (cmd == RestaurantCMD.CREATE_ACCOUNT) {
        this.showMessageSuccess();
      }
    } else {
      this.mAppModule.showToast(params.getUtfString(Paramskey.MESSAGE));
    }
  }

  showMessageSuccess() {
    this.mAppModule.showToast("Thêm mới thành công");
    this.mViewController.dismiss(1);
  }

  onClickSave() {
    this.mAppModule.showLoading();
    RestaurantSFSConnector.getInstance().doSignUp(this.mUserData);
  }

}
