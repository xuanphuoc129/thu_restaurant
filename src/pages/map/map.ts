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
    let floors = RestaurantManager.getInstance().getFloors();
    let areas = RestaurantManager.getInstance().getAreas();
    let tables = RestaurantManager.getInstance().getTables();

    this.mArrayFloorModels = [];
    floors.forEach(element => {
      this.mArrayFloorModels.push({
        floor: element,
        areas: areas.filter(area => {
          return area.getFloor_id() == element.getFloor_id()
        }),
        tables: tables.filter(table => {
          return table.getFloor_id() == element.getFloor_id()
        })
      })
    });
  }

  ionViewDidLoad() {
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
      // let dataBase = RestaurantClient.getInstance().doBaseDataWithCMDParams(cmd,params);
      if (cmd == RestaurantCMD.GET_LIST_FLOOR_IN_RESTAURANT) {
        this.onLoadData();
      } else if (cmd == RestaurantCMD.GET_LIST_AREA_IN_RESTAURANT) {
        this.onLoadData();
      } else if (cmd == RestaurantCMD.GET_LIST_TABLE_IN_RESTAURANT) {
        this.onLoadData();
      }
    } else {
      this.mAppModule.showToast(params.getUtfString(Paramskey.MESSAGE));
    }
  }

 
  onClickTable(table: Tables) {
    this.mAppModule.showModal("FloorTableAreaInfoPage", { mode: 3, id: table.getTable_id() }, (id) => {
      if (id) {
        RestaurantSFSConnector.getInstance().getListTableOfRestaurant(this.mAppModule.getRestaurantOfUser().getRestaurant_id());
      }
    });
  }
  


}
