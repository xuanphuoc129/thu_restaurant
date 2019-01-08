import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntertainmentPage } from './entertainment';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EntertainmentPage,
  ],
  imports: [
    IonicPageModule.forChild(EntertainmentPage),
    ComponentsModule
  ],
})
export class EntertainmentPageModule {}
