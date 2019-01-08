import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactusPage } from './contactus';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ContactusPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactusPage),ComponentsModule
  ],
})
export class ContactusPageModule {}
