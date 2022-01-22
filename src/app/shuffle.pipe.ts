import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shuffle'
})
export class ShufflePipe implements PipeTransform {

  transform(value: Array<any>): Array<any> {
    return this.shuffle(value);
  }
    shuffle=(input: any): any=> {
    // const copy = [...input];
    for (let i = input.length; i; --i) {
      const j = Math.floor(Math.random() * i);
      const x = input[i - 1];
      input[i - 1] = input[j];
      input[j] = x;
    }
  
    return input;
  }
}
