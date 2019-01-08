import * as core from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantSFSConnector } from '../../providers/smartfox/SFSConnector';
import { UserData } from '../../providers/class/UserData';
import { AppModuleProvider } from '../../providers/app-module/app-module';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'LoginPage',
segment: 'login'} 
)
@core.Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string = "";
  password: string = "";

  constructor(
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.mAppModule._loadAppConfig().then(()=>{

    }).catch((err)=>{
      
    }) 
  }

  onClickLogin(){
    if(this.username.trim() == '' || this.password.trim() == ''){
      alert("Bạn chưa điền tên đăng nhập hoặc mật khẩu");
      return;
    }

    this.connectToServer();

  }

  connectToServer(){
    RestaurantSFSConnector.getInstance().connect().then(()=>{
      this.doLogin();
    }).catch(err=>{
      alert("Không thể kết nối đến server.");
    })
  }

  doLogin(){
    let userData = new UserData();
    userData.setUsername(this.username);
    userData.setPassword(this.password);
    
    RestaurantSFSConnector.getInstance().doLogin(userData).then((data)=>{
      this.loginSuccess(data);
    }).catch(err=>{

    })
  }

  loginSuccess(data){
    alert("Login success");
  }

}
