import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Segment, Item } from 'ionic-angular';
// import { Items } from '../menu/menu';
import { Http } from '@angular/http';
import { AppModuleProvider } from '../../providers/app-module/app-module';

/**
 * Generated class for the MenudrinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export class Menuitems {
  id: string = '';
  title: string = 'title';
  arrayitems: Array<Items> = [];
  constructor() {

  }
}

export class Items {
  name: string = 'name';
  description: string = 'description';
  price: number = 0;
  constructor() {

  }
}


@IonicPage({
  name: 'MenudrinkPage',
  segment: 'menudrink'
})
@Component({
  selector: 'page-menudrink',
  templateUrl: 'menudrink.html',
})
export class MenudrinkPage {
  menu: Array<Menuitems> = [];
  arrayImages: Array<string> = [];
  mMenuSelect: Menuitems = new Menuitems();

  constructor(
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.onLoadDataFromFile();
  }
  onLoadDataFromFile() {
    this.mAppModule._loadAppConfig().then(() => {
      let menu = this.mAppModule.getAppConfig().get("menu");
      console.log(menu);
      this.mMenuSelect = menu[0];
    })
  }

}
