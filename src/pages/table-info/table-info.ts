import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Orders } from '../../providers/class/Orders';
import { ProductInOrder } from '../../providers/class/ProductInOrder';
import { RestaurantSFSConnector } from '../../providers/smartfox/SFSConnector';
import { RestaurantClient } from '../../providers/smartfox/RestaurantClient';
import { RestaurantCMD } from '../../providers/smartfox/RestaurantCMD';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { RestaurantManager } from '../../providers/app-module/RestaurantManager';

/**
 * Generated class for the TableInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-table-info',
  templateUrl: 'table-info.html',
})
export class TableInfoPage {

  mOrder: Orders = new Orders();
  products: Array<ProductInOrder> = [];
  table_name : string = "";

  constructor(
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.data["id"]) {
      this.mOrder.setOrder_id(this.navParams.get("id"));
    }
    if (this.navParams.data["table"]) {
      this.table_name = this.navParams.get("table");
    }
  }

  ionViewDidLoad() {
    RestaurantSFSConnector.getInstance().addListener("TableInfoPage", response => {
      this.onExtensions(response);
    })

    RestaurantSFSConnector.getInstance().getListProductInOrder(this.mOrder.getOrder_id());
    RestaurantSFSConnector.getInstance().getOrderInfo(this.mOrder.getOrder_id());
  }

  ionViewWillUnload() {
    RestaurantSFSConnector.getInstance().removeListener("TableInfoPage");
  }

  onExtensions(response) {
    this.mAppModule.hideLoading();

    let cmd = response.cmd;
    let params = response.params;

    if (RestaurantClient.getInstance().doCheckStatusParams(params)) {
      let database = RestaurantClient.getInstance().doBaseDataWithCMDParams(cmd, params);

      if (cmd == RestaurantCMD.GET_ORDER_INFO) {
        this.onResponseGetOrderInfo(database);
      } else if (cmd == RestaurantCMD.GET_PRODUCT_IN_ORDER) {
        this.onResponseOrderInProduct(database);
      } 

    } else {
      // this.mAppModule.showParamsMessage(params);
    }
  }
  
  onResponseGetOrderInfo(database) {
    this.mOrder.fromSFSObject(database.info);
    let tables = RestaurantManager.getInstance().getTables();
    let index = tables.findIndex(table => {
      return table.getTable_id() == this.mOrder.getTable_id();
    })

    if (index > -1) {
      this.mOrder.getTables().fromObject(tables[index]);
    }

  }

  onResponseOrderInProduct(database) {
    this.products = RestaurantClient.getInstance().onParseProductInOrder(database.array);
  }



}
