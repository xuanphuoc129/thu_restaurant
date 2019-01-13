import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the VendorStatusPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'vendorStatus',
})
export class VendorStatusPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(status: number) {
    if(status == 1){
      return "Đang hoạt động";
    }else{
      return "Ngừng hoạt động";
    }
  }
}
