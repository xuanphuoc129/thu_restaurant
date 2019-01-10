import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewreportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewreport',
  templateUrl: 'viewreport.html',
})
export class ViewreportPage {
    
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewreportPage');
  }
  reports = [
    {
      res : "Nhà Hàng Hải sản phố",
      owner : "Trần Ngọc Giang",
      date:"12/01/2019",
      status : 1,
      content : "Báo cáo hoạt động hệ thống",

    },
    {
      owner : "Nguyễn Mạnh Tùng",
      date: "02/1/2019",
      status : 1,
      content : "Báo cáo hoạt động hệ thống", 
      res:"Nhà hàng delicious"
    },
    {
      owner : "Bùi Huy Hoàng",
      date: "22/12/2018",
      status : 1,
      content : "Báo cáo hoạt động hệ thống", 
      res : "Nhà hàng Sứ Bia - Nguyễn Đình Chiểu"
    },
    {
      owner : "Lương Ánh Ngọc",
      date: "15/12/2018",
      status : 1,
      content : "Báo cáo hoạt động hệ thống", 
      res: "Nhung Bakery"
    },
    {
      owner : "Tran Minh Nhat",
      date: "17/12/2018",
      status : 1,
      content : "Báo cáo hoạt động hệ thống", 
      res: "Quán nhậu Tự Do"
    },
    {
      owner : "Lương Ánh Ngọc",
      date: "15/12/2018",
      status : 0,
      content : "Báo cáo hoạt động hệ thống", 
      res:"Nhung Bakery"
    }
  ]

}
