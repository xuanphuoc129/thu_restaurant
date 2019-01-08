import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiscountPage } from './discount';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DiscountPage,
  ],
  imports: [
    IonicPageModule.forChild(DiscountPage),ComponentsModule
  ],
})
export class DiscountPageModule {}
