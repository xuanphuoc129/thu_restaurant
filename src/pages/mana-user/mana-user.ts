import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ManaUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mana-user',
  templateUrl: 'mana-user.html',
})
export class ManaUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManaUserPage');
  }
users = [
  {
name : "Đỗ Trung Hiếu",
timestart:"15/1/2018",
res : "Nhà hàng Thu Hằng",
type:"Nhà hàng cơm việt",
status:"Đang hoạt động"
  },
  {
name : "Trần Hồng Thắm",
timestart:"12/02/2017",
res : "Quên cafe",
type:"Nước giải khát",
status:"Đang tạm ngưng"
  },
  {
name : "Trần Trung Quân",
timestart:"22/6/2018",
res : "Trung Quân - Quán ngon Hà Nội",
type:"Cơm Văn phòng",
status:"Đang hoạt động"
  },
  {
name : "Nguyễn Lan Anh",
timestart:"30/6/2018",
res : "Laan",
type:"Cơm gà 89",
status:"Đang hoạt động"
  },
  {
name : "Bùi Hồng Nhung",
timestart:"05/11/2018",
res : "Cafe with fruits",
type:"nước giải khát",
status:"đang hoạt động"
  },
  {
name : "Phan Hùng",
timestart:"24/11/2016",
res : "Gà Quay ",
type:"nhà hàng cơm",
status:"Tạm nghỉ"
  },
  {
name : "Nguyễn Minh Trang",
timestart:"15/02/2017",
res : "MinhTrangBamiHot",
type:"Bánh mỳ",
status:"Đang hoạt động"
  },
  {
name : "Bùi Hồng Đăng",
timestart:"22/12/2018",
res : "Gà đắp đất",
type:"Nhà hàng cơm quê",
status:"Đang hoạt động"
  },
  {
name : "Trần Chí Thiện",
timestart:"08/03/2008",
res : "Hải Sản Phúc Hưng",
type:"Nhà hàng cơm Hải sản",
status:"Đang hoạt động"
  },
]
}
