import { Component, Input } from '@angular/core';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { Users } from '../../providers/class/Users';

/**
 * Generated class for the AdminheaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'adminheader',
  templateUrl: 'adminheader.html'
})
export class AdminheaderComponent {

  @Input("selected") mSelectedIndex: number = 1;
  mUser : Users = new Users();

  constructor(public mAppModule: AppModuleProvider) {

    this.mUser = this.mAppModule.getUser();
  }



}
