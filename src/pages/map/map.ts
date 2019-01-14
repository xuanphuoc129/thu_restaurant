import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
import { Floors } from '../../providers/class/Floors';
import { Areas } from '../../providers/class/Areas';
import { Tables } from '../../providers/class/Tables';
import { RestaurantSFSConnector } from '../../providers/smartfox/SFSConnector';
import { RestaurantClient } from '../../providers/smartfox/RestaurantClient';
import { RestaurantCMD } from '../../providers/smartfox/RestaurantCMD';
import { Paramskey } from '../../providers/smartfox/Paramkeys';
import { RestaurantManager } from '../../providers/app-module/RestaurantManager';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { HomePage } from '../home/home';
import { t } from '@angular/core/src/render3';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface FloorModels {
  floor: Floors;
  areas: Array<Areas>;
  tables: Array<Tables>;
}

@IonicPage(
  {
    name: "MapPage",
    segment: "map"
  }
)
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {


  mArrayFloorModels: Array<FloorModels> = [];

  mTables: Array<Tables> = [];
  mTablesIsServe: Array<Tables> = [];
  tables: Array<Tables> = [];

  constructor(
    public mActionSheet: ActionSheetController,
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController, public navParams: NavParams,
  ) {
  }

  onClickClose(){
    this.navCtrl.setRoot(HomePage);
  }

  onLoadData() {
    if(this.mTables.length == 0 || this.mTablesIsServe.length == 0) return;
  }

  ionViewDidLoad() {
    if(!this.mAppModule.isLogin){ 
      this.navCtrl.setRoot(HomePage);
      return;
    }

    this.onLoadData();
    RestaurantSFSConnector.getInstance().addListener("MapPage", response => {
      this.onExtensions(response);
    })
  }

  ionViewWillUnload() {
    RestaurantSFSConnector.getInstance().removeListener("MapPage");
  }

  onExtensions(response) {
    let cmd = response.cmd;
    let params = response.params;

    if (RestaurantClient.getInstance().doCheckStatusParams(params)) {
      let dataBase = RestaurantClient.getInstance().doBaseDataWithCMDParams(cmd,params);
      if (cmd == RestaurantCMD.GET_LIST_TABLE_IN_RESTAURANT) {
        this.mTables = dataBase;
        
      } else if (cmd == RestaurantCMD.GET_LIST_TABLE_IS_SERVE) {
        this.mTablesIsServe = dataBase;
      }
    } else {
      this.mAppModule.showToast(params.getUtfString(Paramskey.MESSAGE));
    }
  }

 
  onClickTable(table: Tables) {
    let mAlert = this.mAppModule.mAlertController.create();
    mAlert.setTitle("Thông báo");
    mAlert.addInput({
      placeholder: "Nhập mã bàn ăn",
      name: "mk"
    });
    mAlert.addButton({
      text: "Ok",
      handler: data=>{
        let pass = data.mk;
        if(pass && parseInt(pass) == table.getTable_id()){
          this.mAppModule.showModal("TableInfoPage",{id: table.getOrder_id(), table: table.getName()});
        }else{
          alert("Sai mật mã");
        }
      }
    })
    mAlert.present();
  }
  


}
