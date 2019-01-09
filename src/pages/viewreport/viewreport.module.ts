import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewreportPage } from './viewreport';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ViewreportPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewreportPage),ComponentsModule
  ],
})
export class ViewreportPageModule {}
