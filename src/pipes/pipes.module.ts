import { NgModule } from '@angular/core';
import { UserStatusPipe } from './user-status/user-status';
import { TypeServicePipe } from './type-service/type-service';
import { FormServicePipe } from './form-service/form-service';
import { ResStatusPipe } from './res-status/res-status';
import { VendorStatusPipe } from './vendor-status/vendor-status';
@NgModule({
	declarations: [UserStatusPipe,
    TypeServicePipe,
    FormServicePipe,
    ResStatusPipe,
    VendorStatusPipe],
	imports: [],
	exports: [UserStatusPipe,
    TypeServicePipe,
    FormServicePipe,
    ResStatusPipe,
    VendorStatusPipe]
})
export class PipesModule {}
