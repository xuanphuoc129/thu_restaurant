import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ResStatusPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'resStatus',
})
export class ResStatusPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(status) {
    if(status == 1){
      return "Đang hoạt động";
    }
    else if(status == 2){
      return "Ngừng hoạt động";
    }
    return "Chưa cập nhật";
  }
}
