import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenudrinkPage } from './menudrink';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MenudrinkPage,
  ],
  imports: [
    IonicPageModule.forChild(MenudrinkPage),ComponentsModule
  ],
})
export class MenudrinkPageModule {}
