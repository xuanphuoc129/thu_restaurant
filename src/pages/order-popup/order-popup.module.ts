import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderPopupPage } from './order-popup';

@NgModule({
  declarations: [
    OrderPopupPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderPopupPage),
  ],
})
export class OrderPopupPageModule {}
