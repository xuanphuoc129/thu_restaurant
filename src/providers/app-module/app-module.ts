import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../core/app/config';
import { Http } from '@angular/http';
import { AlertController, ModalController } from 'ionic-angular';
import { RestaurantSFSConnector } from '../smartfox/SFSConnector';
import 'rxjs/add/operator/map';
import { ScrollController } from '../core/common/scroll-controller';
import { Users } from '../class/Users';
import { Paramskey } from '../smartfox/Paramkeys';

/*
  Generated class for the AppModuleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppModuleProvider {

  isLogin: boolean = false;

  private mAppConfig: Config;
  private mScrollController: ScrollController = new ScrollController();
  private mUser: Users = new Users();
  constructor(
    public mModalController: ModalController,
    public mAlertController: AlertController,
    public http: Http
) {
    this.mAppConfig = new Config();
  }

  public getUser(): Users{
    return this.mUser;
  }

  public showModal(page,params?:any, callback?:any){
    let modal = this.mModalController.create(page,params ? params : null);
    modal.present();
    modal.onDidDismiss((data)=>{
      if(callback){
        callback(data);
      }
    });
  }

  public getScrollController(): ScrollController{
    return this.mScrollController;
  }

  public getAppConfig(): Config {
    return this.mAppConfig;
  }

  public _loadAppConfig() {
    return new Promise((resolve, reject) => {
      this.http.get('./assets/data/app.json').map(res => res.json()).subscribe(data => {
        if (data) {
          this.onResponeAppConfig(data);
          resolve(data);
        } else {
          reject();
        }
      })
    })

  }

  public onLoginSuccess(data){
    this.isLogin = true;
    let params = data["data"];
    let content  = params.getSFSObject(Paramskey.CONTENT);
    let user = content.getSFSObject(Paramskey.USER);
    this.mUser.fromSFSObject(user);
  }

  public onResponeAppConfig(data) {
    
    this.mAppConfig.setData(data);
    RestaurantSFSConnector.getInstance().setData(this.mAppConfig.get("smartfox"));
  }



}
