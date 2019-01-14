import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TableInfoPage } from './table-info';

@NgModule({
  declarations: [
    TableInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TableInfoPage),
  ],
})
export class TableInfoPageModule {}
