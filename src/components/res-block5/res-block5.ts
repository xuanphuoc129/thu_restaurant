import { Component } from '@angular/core';

/**
 * Generated class for the ResBlock5Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'res-block5',
  templateUrl: 'res-block5.html'
})
export class ResBlock5Component {

  text: string;
  resname: string = "Delicious";
  address: string = "Số 1 Tràng Thi - Hoàn Kiếm - Hà Nội.";
  hotline: string = "096.968.1900";
  service_support: string = "096.968.1900";
  phone: string = "0973.950.482";
  email: string = "deleicious@gmail.com";
  constructor() {
    console.log('Hello ResBlock5Component Component');
    this.text = 'Hello World';
  }

}
