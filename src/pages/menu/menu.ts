import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, Slides } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

/**
 * Generated class for the MenuPage page.
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
  name: 'ContactPage',
  segment: 'menu'
})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Slides) myslide:Slides;
  text: string;
  url:string= "../assets/imgs/res-table1.jpeg";
  url1:string= "../assets/imgs/res-table1.jpeg";
  url2:string= "../assets/imgs/res-table1.jpeg";
  

  menus: Array<Menuitems> = [];// cho mảng


  mMenuSelect: Menuitems = new Menuitems(); // khởi tạo giá trị mặc định cho biến

  constructor(
    public http: Http,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.onLoadDataFromFile();
    // for (let index = 0; index < 10; index++) {

    //   let newMenuItem = new Menuitems();

    //   newMenuItem.id = index + "";
    //   newMenuItem.title = "Title" + (index + 1);

    //   for(let i = 0 ; i < 5; i++){
    //     let newItem = new Items();

    //     newItem.name = newMenuItem.title + "- item Name" + (i + 1);

    //     newMenuItem.arrayitems.push(newItem);
    //   }

    //   this.menus.push(newMenuItem);
    // }

  }
  onNextSlide() {
    this.myslide.slideNext();
  }
  onBackSlide() {
    this.myslide.slidePrev();
  }

  onLoadDataFromFile() {
    this.http.get('./assets/data/app.json').map(res => res.json()).subscribe(data => {
      this.menus = data.menu;
      this.mMenuSelect = this.menus[0];
    });
  }

  onClickMenuItems(item) {
    this.mMenuSelect = item;
  }

}
