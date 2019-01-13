import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManaVendorResPage } from './mana-vendor-res';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ManaVendorResPage,
  ],
  imports: [
    IonicPageModule.forChild(ManaVendorResPage),
    ComponentsModule,
    PipesModule
  ],
})
export class ManaVendorResPageModule {}
