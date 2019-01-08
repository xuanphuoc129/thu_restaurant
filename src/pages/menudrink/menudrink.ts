import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Segment, Item } from 'ionic-angular';
// import { Items } from '../menu/menu';
import { Http } from '@angular/http';

/**
 * Generated class for the MenudrinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export class Menuitems{
  id : string='';
  title : string = 'title';
  arrayitems :Array<Items>=[];
  constructor(){

  }
}

export class Items {
  name : string = 'name';
  description:string ='description';
  price : number=0;
  constructor(){

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
  menu:Array<Menuitems>=[];
  arrayImages:Array<string>=[];
  mMenuSelect:Menuitems=new Menuitems();

  constructor(
    public http : Http,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenudrinkPage');
  }
  onLoadDataFromFile(){
    this.http.get('.assets/data/app.json').map(res=>res.json().subscrise(data=>{
      this.menu = data.menu;
      this.mMenuSelect = this.menu[0];
    }))
  }

}
