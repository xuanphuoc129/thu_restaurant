import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenufoodPage } from './menufood';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MenufoodPage,
  ],
  imports: [
    IonicPageModule.forChild(MenufoodPage),ComponentsModule
  ],
})
export class MenufoodPageModule {}
