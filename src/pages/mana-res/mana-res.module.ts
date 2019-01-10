import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManaResPage } from './mana-res';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ManaResPage,
  ],
  imports: [
    IonicPageModule.forChild(ManaResPage),ComponentsModule
  ],
})
export class ManaResPageModule {}
