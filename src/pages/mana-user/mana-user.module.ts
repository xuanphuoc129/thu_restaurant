import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManaUserPage } from './mana-user';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ManaUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ManaUserPage),
    ComponentsModule,
    PipesModule
  ],
})
export class ManaUserPageModule {}
