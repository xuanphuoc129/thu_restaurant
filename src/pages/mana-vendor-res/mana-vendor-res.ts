import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ManaVendorResPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mana-vendor-res',
  templateUrl: 'mana-vendor-res.html',
})
export class ManaVendorResPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManaVendorResPage');
  }
vendors = [
{
  name : "Hotpotto",
  type:"Nhà Hàng lẩu HongKong",
  owner:"Trịnh Hoài Đức",
  status:"Đang hoạt động"
},
{
  name : "GoGi",
  type:"Nhà Hàng Nướng không khói",
  owner:"Anthonyhenry",
  status:"Đang hoạt động"
},
{
  name : "Sứ Bia",
  type:"Nhà Hàng Việt",
  owner:"Nguyễn Trần Nhật Anh",
  status:"Đang hoạt động"
},
{
  name : "kichi-kichi",
  type:"Nhà Hàng lẩu Băng Chuyền",
  owner:"NicodemusKuan",
  status:"Đang hoạt động"
},
{
  name : "ChefDzung",
  type:"Nhà Hàng buffet",
  owner:"Trịnh Đăng Dũng",
  status:"Đang hoạt động"
},
{
  name : "Hẻm quán",
  type:"Nhà Hàng cơm Việt",
  owner:"Trương Văn Nam",
  status:"Đang hoạt động"
},
{
  name : "Bánh cuốn thịt heo",
  type:"Nhà Hàng Bánh Cuốn Việt",
  owner:"Tô Hữu Thái",
  status:"Đang hoạt động"
},
{
  name : "Cơm Việt",
  type:"Nhà Hàng Các món ăn Việt",
  owner:"Nguyễn Tuấn Nghĩa",
  status:"Đang hoạt động"
},
]
}
