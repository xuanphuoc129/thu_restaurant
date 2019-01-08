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
  name: 'MenuPage',
  segment: 'menu'
})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Slides) myslide:Slides;
  text: string;
  url3:string= "../assets/imgs/rice5.jpg";
  url1:string= "../assets/imgs/6.jpg";
  url2:string= "../assets/imgs/7.jpg";
  url4:string= "../assets/imgs/2.jpg";
  url5:string= "../assets/imgs/res-img2.jpg";
  url6:string= "../assets/imgs/n-7.jpg";
  url7:string= "../assets/imgs/p-7.jpg";
  url8:string= "../assets/imgs/ri-7.jpg";
  url9:string= "../assets/imgs/r-7.jpg";
  url10:string= "../assets/imgs/b-7.jpg";
  

  menus: Array<Menuitems> = [];// cho mảng
  arrayImages: Array<string> = [];

  mMenuSelect: Menuitems = new Menuitems(); // khởi tạo giá trị mặc định cho biến

  constructor(
    public http: Http,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.arrayImages = [
      "../assets/imgs/rice5.jpg",
      "../assets/imgs/6.jpg",
      "../assets/imgs/7.jpg",
      "../assets/imgs/2.jpg",
       "../assets/imgs/res-img2.jpg",
      "../assets/imgs/n-7.jpg",
      "../assets/imgs/p-7.jpg",
      "../assets/imgs/ri-7.jpg",
      "../assets/imgs/r-7.jpg",
      "../assets/imgs/b-7.jpg",
      
    ];
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
