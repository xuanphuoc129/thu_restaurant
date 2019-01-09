import { NgModule } from '@angular/core';
import { ResBlock1Component } from './res-block1/res-block1';
import { ResBlock2Component } from './res-block2/res-block2';
import { ResBlock3Component } from './res-block3/res-block3';
import { ResBlock4Component } from './res-block4/res-block4';
import { ResBlock5Component } from './res-block5/res-block5';
import { IonicModule } from 'ionic-angular';
import { ResHeaderComponent } from './res-header/res-header';
import { OrderBtnFabComponent } from './order-btn-fab/order-btn-fab';
import { AdminheaderComponent } from './adminheader/adminheader';
@NgModule({
	declarations: [ResBlock1Component,
    ResBlock2Component,
    ResBlock3Component,
    ResBlock4Component,
    ResBlock5Component,
    ResHeaderComponent,
    OrderBtnFabComponent,
    AdminheaderComponent],
	imports: [
        IonicModule
    ],
	exports: [ResBlock1Component,
    ResBlock2Component,
    ResBlock3Component,
    ResBlock4Component,
    ResBlock5Component,
    ResHeaderComponent,
    OrderBtnFabComponent,
    AdminheaderComponent]
})
export class ComponentsModule {}
