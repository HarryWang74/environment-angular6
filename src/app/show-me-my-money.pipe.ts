import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showMeMyMoney'
})
export class ShowMeMyMoneyPipe implements PipeTransform {

  transform(value: any): any {
    if(value > 1000 || value < 1000000){
      return value/1000 
    }
  }

}
