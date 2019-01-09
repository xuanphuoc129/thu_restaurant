import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppModuleProvider } from '../../providers/app-module/app-module';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mRestaurantName: string = "Wellcome to Delicous";
  mAddress: string = "Số 2, Tràng Thi, Hoàn Kiếm, Hà nội";
  constructor(
    public mAppModule : AppModuleProvider,
    public navCtrl: NavController) {
    // this.navCtrl.push("ContactPage",{name: "thu"});
  }

  ionViewDidLoad(){
    this.mAppModule._loadAppConfig().then(()=>{

    }).catch((err)=>{
      
    }) 
  }

}
