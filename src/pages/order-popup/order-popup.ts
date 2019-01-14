import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { RestaurantSFSConnector } from '../../providers/smartfox/SFSConnector';
import { UserData } from '../../providers/class/UserData';
import { Paramskey } from '../../providers/smartfox/Paramkeys';
import { RestaurantClient } from '../../providers/smartfox/RestaurantClient';
import { RestaurantCMD } from '../../providers/smartfox/RestaurantCMD';
import { Products } from '../../providers/class/Products';
import { RestaurantManager } from '../../providers/app-module/RestaurantManager';
import { Orders } from '../../providers/class/Orders';
import { ProductInOrder } from '../../providers/class/ProductInOrder';

/**
 * Generated class for the OrderPopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface ProductModels {
  product: Products;
  quantity: number;
}


@IonicPage()
@Component({
  selector: 'page-order-popup',
  templateUrl: 'order-popup.html',
})
export class OrderPopupPage {

  mProducts: Array<Products> = [];
  _mProducts: Array<ProductModels> = [];
  mProductSelected: Array<ProductModels> = [];

  mOrder: Orders = new Orders();

  isInput: boolean = false;

  constructor(
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    this.mAppModule._loadAppConfig().then(() => {
      this.onLoadConfigDone();
    }).catch((err) => {

    })


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
    userData.setUsername("guest");
    userData.setPassword("guest");

    RestaurantSFSConnector.getInstance().doLogin(userData).then((data) => {
      this.loginSuccess(data);
    }).catch(err => {
      this.mAppModule.hideLoading();
      alert("Không thể kết nối đến server.");
    })
  }

  loginSuccess(data) {
    this.mAppModule.onLoginSuccess(data);

  }


  ionViewDidLoad() {
    RestaurantSFSConnector.getInstance().addListener("OrderPopupPage", response => {
      this.onExtensions(response);
    })
  }

  ionViewWillUnload() {
    RestaurantSFSConnector.getInstance().removeListener("OrderPopupPage");
  }

  onExtensions(response) {
    this.mAppModule.hideLoading();
    let cmd = response.cmd;
    let params = response.params;

    if (params.getInt(Paramskey.STATUS) == 1) {
      let dataBase = RestaurantClient.getInstance().doBaseDataWithCMDParams(cmd, params);
      if (cmd == RestaurantCMD.GET_PRODUCT_IN_RESTAURANT) {
        this.onBaseListProductInRestaurant(dataBase);
      }else if(cmd == RestaurantCMD.CREATE_ORDER){
        this.onResponseCreateOrder(dataBase);
      }else if(cmd == RestaurantCMD.ADD_PRODUCT_INTO_ORDER){
        this.onResponseAddProductInOrder(dataBase);
      }
    } else {
      alert(params.getUtfString(Paramskey.MESSAGE));
    }
  }

  onResponseCreateOrder(database){
    this.mOrder.fromSFSObject(database.info);
    let array: Array<ProductInOrder> = [];
    this.mProductSelected.forEach(element=>{
      let mProductInOrder = new ProductInOrder();
      mProductInOrder.fromProductInModels(element);
      mProductInOrder.setOrder_id(this.mOrder.getOrder_id());
      array.push(mProductInOrder);
    })
    this.mAppModule.showLoading();
    RestaurantSFSConnector.getInstance().addProductIntoOrder(array);
  }

  onResponseAddProductInOrder(database){
    alert("Đặt hàng thành công!");
    this.navCtrl.pop();
  }

  onBaseListProductInRestaurant(dataBase) {
    this.mProducts = dataBase;
    this._mProducts = [];
    this.mProducts.forEach(element => {
      this._mProducts.push({
        product : element,
        quantity : 0
      });
    });
  }


  onClickSend(){
    this.mAppModule.showLoading();
    let sum = 0;
    this.mProductSelected.forEach(element => {
      sum+= element.product.getPrice() * element.quantity;
    });
    this.mOrder.setTotal_money(sum);
    this.mOrder.setRestaurant_id(this.mAppModule.getRestaurantOfUser().getRestaurant_id());

    RestaurantSFSConnector.getInstance().createOrder(this.mOrder);
  }

  onClickAdd(item: ProductModels) {
    item.quantity = 1;
    this.mProductSelected.push(item);
  }

  onClickRemoveItem(item: ProductModels) {
    item.quantity--;
    if(item.quantity == 0){
      let index = this.mProductSelected.findIndex(pro=>{
        return pro.product.getProduct_id() == item.product.getProduct_id();
      })

      if(index > -1){
        this.mProductSelected.splice(index ,1);
      }
    }
  }
  onClickAddItem(item: ProductModels) {
    item.quantity++;
  }

  onClickContinue(){
    this.isInput = true;
  }
}
