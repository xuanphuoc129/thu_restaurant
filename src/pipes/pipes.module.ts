import { NgModule } from '@angular/core';
import { UserStatusPipe } from './user-status/user-status';
@NgModule({
	declarations: [UserStatusPipe],
	imports: [],
	exports: [UserStatusPipe]
})
export class PipesModule {}
