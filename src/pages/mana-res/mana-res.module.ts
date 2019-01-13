import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManaResPage } from './mana-res';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ManaResPage,
  ],
  imports: [
    IonicPageModule.forChild(ManaResPage),
    ComponentsModule,
    PipesModule
  ],
})
export class ManaResPageModule {}
