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

  constructor(
    public mAppModuel: AppModuleProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    if(!this.mAppModuel.isLogin){
      this.navCtrl.setRoot("LoginPage");
    }else{
      RestaurantSFSConnector.getInstance().addListener("ManaResPage", response=>{
        this.onExtensions(response);
      })
      RestaurantSFSConnector.getInstance().getListRestaurant();
    }
  }

  onExtensions(response){
    let cmd = response.cmd;
    let params = response.params;

    if(params.getInt(Paramskey.STATUS) == 1){
      let dataBase = RestaurantClient.getInstance().doBaseDataWithCMDParams(cmd,params);
      if(cmd == RestaurantCMD.GET_LIST_RESTAURANT){
        this.onBaseListRestaurant(dataBase);
      }
    }else{
      alert(params.getUtfString(Paramskey.MESSAGE));
    }
  }

  ionViewWillUnload(){
    RestaurantSFSConnector.getInstance().removeListener("ManaResPage");
  }

  onBaseListRestaurant(dataBase){
    console.log(dataBase);
    this.restaurants = [];
    dataBase.forEach(element => {
      this.restaurants.push({
        name: element.getName(),
        owner: element["managerID"] ? element["managerID"] : "Chưa cập nhât",
        type: element.type_service  > -1 ? " ": "Chưa cập nhât",
        status: "Đang hoạt động"
      })
    });
  }


  restaurants = [
    {
      name: "delicious",
      owner: "Nguyen Van A",
      type: "Cà phê giải khát",
      status: "Đang hoạt động",
    },
    {
      name: "Đường ngon",
      owner: "Nguyen Van A",
      type: "Cà phê giải khát",
      status: "Đang hoạt động",
    },
    {
      name: "Trâu tươi",
      owner: "Nguyen Van A",
      type: "Cà phê giải khát",
      status: "Đang hoạt động"
    },
    {
      name: "Thu Hằng",
      owner: "Nguyen Van A",
      type: "Cà phê giải khát",
      status: "Đang hoạt động"
    },
    {
      name: "Trâu Tươi -Hai Bà Trưng",
      owner: "Nguyen Van A",
      type: "Cà phê giải khát",
      status: "Đang hoạt động"
    }
  ]
}
