import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the UserStatusPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'userStatus',
})
export class UserStatusPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(status: number) {
    if(status == 1){
      return "Đang hoạt động";
    }else{
      return "Đã khoá";
    }
  }
}
