import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../core/app/config';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { RestaurantSFSConnector } from '../smartfox/SFSConnector';
import 'rxjs/add/operator/map';
import { ScrollController } from '../core/common/scroll-controller';

/*
  Generated class for the AppModuleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppModuleProvider {
  private mAppConfig: Config;
  private mScrollController: ScrollController = new ScrollController();

  constructor(
    public mAlertController: AlertController,
    public http: Http
) {
    this.mAppConfig = new Config();
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

  public onResponeAppConfig(data) {
    console.log(data);
    
    this.mAppConfig.setData(data);
    RestaurantSFSConnector.getInstance().setData(this.mAppConfig.get("smartfox"));
  }



}
