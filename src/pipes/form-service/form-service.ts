import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FormServicePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'formService',
})
export class FormServicePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(type) {
    if (type == 1) {
      return "Phục vụ tại chỗ";
    } 
    else if (type == 2) {
      return "Giao hàng";
    }
    else {
      return "Chưa cập nhật";
    }
  }
}
