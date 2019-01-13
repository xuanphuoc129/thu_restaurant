import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TypeServicePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'typeService',
})
export class TypeServicePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(type) {
    if (type == 1) {
      return "Đồ ăn";
    } 
    else if (type == 2) {
      return "Đồ uống";
    }
    else if (type == 3) {
      return "Đồ ăn và đồ uống";
    } 
    else {
      return "Chưa cập nhật";
    }
  }
}
